# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''WorldcloudComponentDashComponent <- function(FallbackUI=NULL, color=NULL, component=NULL, drawOutOfBound=NULL, ellipticity=NULL, fontFamily=NULL, gridSize=NULL, height=NULL, list=NULL, minSize=NULL, onStart=NULL, onStop=NULL, onWordDrawn=NULL, origin=NULL, shape=NULL, weightFactor=NULL, width=NULL) {
    
    props <- list(FallbackUI=FallbackUI, color=color, component=component, drawOutOfBound=drawOutOfBound, ellipticity=ellipticity, fontFamily=fontFamily, gridSize=gridSize, height=height, list=list, minSize=minSize, onStart=onStart, onStop=onStop, onWordDrawn=onWordDrawn, origin=origin, shape=shape, weightFactor=weightFactor, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'WorldcloudComponentDashComponent',
        namespace = 'worldcloud_component_dash_component',
        propNames = c('FallbackUI', 'color', 'component', 'drawOutOfBound', 'ellipticity', 'fontFamily', 'gridSize', 'height', 'list', 'minSize', 'onStart', 'onStop', 'onWordDrawn', 'origin', 'shape', 'weightFactor', 'width'),
        package = 'worldcloudComponentDashComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
