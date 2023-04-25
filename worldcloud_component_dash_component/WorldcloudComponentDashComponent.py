# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class WorldcloudComponentDashComponent(Component):
    """A WorldcloudComponentDashComponent component.
Component WordCloud

Keyword arguments:

- FallbackUI (dash component; default <div>Browser is not supported</div>):
    If WordCloud is not supported by the browser, this gives the
    displaying error component.

- color (string | dict; optional):
    Color assigned.

- component (string; default 'canvas'):
    Component type where the wordcloud will be drawn.

- drawOutOfBound (boolean; optional):
    Dimension.

- ellipticity (number; optional):
    ellipticity.

- fontFamily (string; optional):
    Font family.

- gridSize (number; optional):
    Dimension.

- height (number; required):
    Height of the canvas.

- list (list; optional):
    Contains words, or words with user-defined sizes.

- minSize (number; optional):
    minSize.

- origin (list of numbers; optional):
    Dimension.

- shape (a value equal to: 'circle', 'cardioid', 'diamond', 'square', 'triangle', 'triangle-forward', 'triangle-upright', 'pentagon', 'star'; optional):
    Shape.

- weightFactor (number; optional):
    Calculates initial font size.

- width (number | string; required):
    Width of the canvas."""
    _children_props = ['FallbackUI']
    _base_nodes = ['FallbackUI', 'children']
    _namespace = 'worldcloud_component_dash_component'
    _type = 'WorldcloudComponentDashComponent'
    @_explicitize_args
    def __init__(self, FallbackUI=Component.UNDEFINED, width=Component.REQUIRED, height=Component.REQUIRED, component=Component.UNDEFINED, list=Component.UNDEFINED, color=Component.UNDEFINED, shape=Component.UNDEFINED, ellipticity=Component.UNDEFINED, minSize=Component.UNDEFINED, weightFactor=Component.UNDEFINED, fontFamily=Component.UNDEFINED, gridSize=Component.UNDEFINED, origin=Component.UNDEFINED, drawOutOfBound=Component.UNDEFINED, onStart=Component.UNDEFINED, onWordDrawn=Component.UNDEFINED, onStop=Component.UNDEFINED, **kwargs):
        self._prop_names = ['FallbackUI', 'color', 'component', 'drawOutOfBound', 'ellipticity', 'fontFamily', 'gridSize', 'height', 'list', 'minSize', 'origin', 'shape', 'weightFactor', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['FallbackUI', 'color', 'component', 'drawOutOfBound', 'ellipticity', 'fontFamily', 'gridSize', 'height', 'list', 'minSize', 'origin', 'shape', 'weightFactor', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['height', 'width']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(WorldcloudComponentDashComponent, self).__init__(**args)
