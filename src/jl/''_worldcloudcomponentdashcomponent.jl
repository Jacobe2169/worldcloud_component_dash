# AUTO GENERATED FILE - DO NOT EDIT

export ''_worldcloudcomponentdashcomponent

"""
    ''_worldcloudcomponentdashcomponent(;kwargs...)

A WorldcloudComponentDashComponent component.
Component WordCloud
Keyword arguments:
- `FallbackUI` (dash component; optional): If WordCloud is not supported by the browser, this gives the displaying error component
- `color` (String | Dict; optional): Color assigned
- `component` (String; optional): Component type where the wordcloud will be drawn
- `drawOutOfBound` (Bool; optional): Dimension
- `ellipticity` (Real; optional): ellipticity
- `fontFamily` (String; optional): Font family
- `gridSize` (Real; optional): Dimension
- `height` (Real; required): Height of the canvas
- `list` (Array; optional): Contains words, or words with user-defined sizes
- `minSize` (Real; optional): minSize
- `origin` (Array of Reals; optional): Dimension
- `shape` (a value equal to: 'circle', 'cardioid', 'diamond', 'square', 'triangle', 'triangle-forward', 'triangle-upright', 'pentagon', 'star'; optional): Shape
- `weightFactor` (Real; optional): Calculates initial font size
- `width` (Real | String; required): Width of the canvas
"""
function ''_worldcloudcomponentdashcomponent(; kwargs...)
        available_props = Symbol[:FallbackUI, :color, :component, :drawOutOfBound, :ellipticity, :fontFamily, :gridSize, :height, :list, :minSize, :origin, :shape, :weightFactor, :width]
        wild_props = Symbol[]
        return Component("''_worldcloudcomponentdashcomponent", "WorldcloudComponentDashComponent", "worldcloud_component_dash_component", available_props, wild_props; kwargs...)
end

