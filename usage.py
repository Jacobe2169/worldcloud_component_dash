from  worldcloud_component_dash_component import WorldcloudComponentDashComponent
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

app.layout = html.Div([
    WorldcloudComponentDashComponent(
        list=[['foo', 12], ['bar', 6]],width=800,height=800,weightFactor=lambda x:"""function addd(i){return i*10}"""
    ),
    html.Div(id='output')
])

if __name__ == '__main__':
    app.run_server(debug=True)
