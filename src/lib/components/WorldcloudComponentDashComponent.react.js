import React, {Component,createRef} from 'react';
import PropTypes from 'prop-types';
import WordCloud from './wordcloud';

/**
 * Component WordCloud
 */
export default class WorldcloudComponentDashComponent extends Component {
        
    
    
      canvas = createRef();
    
      _unbind = [];

    
      componentDidMount() {
        // first bind listeners
        this.bindEventListeners();
        // only then draw
        this.renderWordCloud();
      }
    
      componentDidUpdate() {
        // rebind listeners
        this.unbindEventListeners();
        this.bindEventListeners();
        // redraw
        this.renderWordCloud();
      }
    
      componentWillUnmount() {
        this.unbindEventListeners();
      }
    
      getOptions() {
        const {
          FallbackUI,
          width,
          height,
          onStart,
          onWordDrawn,
          onStop,
          ...options
        } = this.props;
        return options;
      }
    
      bindEventListeners() {
        const { onWordDrawn, onStart, onStop } = this.props;
        const { current: canvas } = this.canvas;
    
        // too early
        if (!canvas) return;
    
        // bind all handlers
        [
          ['wordcloudstart', onStart],
          ['wordclouddrawn', onWordDrawn],
          ['wordcloudstop', onStop],
        ].forEach(([event, handler]) => {
          if (!handler) return;
    
          canvas.addEventListener(event, handler);
    
          this._unbind.push(() => {
            canvas.removeEventListener(event, handler);
          });
        });
      }
    
      unbindEventListeners() {
        const { current } = this.canvas;
    
        if (current) {
          this._unbind.forEach(handler => handler());
        }
    
        this._unbind = [];
      }
    
      renderWordCloud() {
        if (WordCloud.isSupported) {
          WordCloud(this.canvas.current, this.getOptions());
        }
      }
    
      render() {
        if (WordCloud.isSupported) {
          const { width, height, component: Cmp } = this.props;
          return <Cmp
              ref={this.canvas}
              style={{ width:"100%", height:"auto" }}
              width={width}
              height={height}
            />
          
        }
    
        return this.props.FallbackUI;
      }
}

WorldcloudComponentDashComponent.defaultProps = {
    FallbackUI: <div>Browser is not supported</div>,
    component: 'canvas',
  };

WorldcloudComponentDashComponent.propTypes = {
    /**
     * If WordCloud is not supported by the browser, this gives the displaying error component
     */
    FallbackUI: PropTypes.element,
    /**
     * Width of the canvas
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string]).isRequired,
    /**
     * Height of the canvas
     */
    height: PropTypes.number.isRequired,
    /**
     * Component type where the wordcloud will be drawn
     */
    component: PropTypes.string,
    
    /**
     * Contains words, or words with user-defined sizes
     */
    list: PropTypes.arrayOf(
        (props, key, componentName, location, propFullName) => {
        const value = props[key];
        if (!value || !Array.isArray(value)) {
            return new Error(
            `Invalid property ${propFullName} supplied to ${componentName}. Expecting it to be an array of [string, number]. Got ${value} instead.`
            );
        }

        if (value.length !== 2) {
            return new Error(
            `Invalid property ${propFullName} supplied to ${componentName}. Expecting it to be an array of [string, number]. Got ${value} instead.`
            );
        }

        if (typeof value[0] !== 'string' || typeof value[1] !== 'number') {
            return new Error(
            `Invalid property ${propFullName} supplied to ${componentName}. Expecting it to be an array of [string, number]. Got [${typeof value[0]}, ${typeof value[1]}] instead.`
            );
        }
        }
    ),
    /**
     * Color assigned
     */
    color: PropTypes.oneOfType([
        PropTypes.string, // CSS color
        PropTypes.object, // null to dissable color inlininig
        PropTypes.func, // callback(word, weight, fontSize, distance, theta)
    ]),
    /**
     * Shape 
     */
    shape: PropTypes.oneOfType([
        PropTypes.oneOf([
        'circle',
        'cardioid',
        'diamond',
        'square',
        'triangle',
        'triangle-forward',
        'triangle-upright',
        'pentagon',
        'star',
        ]),
        PropTypes.func, // callback(theta) any polar coordinate equation
    ]),
    /**
     * ellipticity
     */
    ellipticity: PropTypes.number,

    /**
     * minSize
     */
    minSize: PropTypes.number,

    /**
     * Calculates initial font size
     */
    weightFactor: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.func, // callback(weight)
    ]),

    /**
     * Font family
     */
    fontFamily : PropTypes.string,
    /**
     * Dimension
    **/
    gridSize: PropTypes.number,
    /**
     * Dimension
    **/
    origin: PropTypes.arrayOf(PropTypes.number),
    /**
     * Dimension
    **/
    drawOutOfBound: PropTypes.bool,
    /**
     * onStart
     */
    onStart: PropTypes.func,
    /**
     * onStart
     */
    onWordDrawn: PropTypes.func,
    /**
     * onStart
     */
    onStop: PropTypes.func,
};
