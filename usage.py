from  worldcloud_component_dash_component import WorldcloudComponentDashComponent
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)
words = "the of and to in a is was that for as with by on are from be or his were it an at not which have he had this has also their but one can its on the other been more they used first all two citation than into would only time who most may such some many when after between over these her about there use no them new him will out during made both then often so any being such as where number could main p. through system people known each while if called convert same later three because well work before the same under part very different became year did large example several city early until much government found own since she even form power do those around state including set high life against second century within world still end using small name what now usually American without however began like as well area make common the most water United States another way due must long less four death said film order due to back public does left based few become known as s given country major British place group considered among game point used to period support war music down million important systems control should took day family language last original result political line members case as well as see single just process along similar take following we although countries right either times areas published the other local include population never data home every various the time".split()

app.layout = html.Div([
    WorldcloudComponentDashComponent(
        list=[[word,len(words)-ix] for ix,word in enumerate(words)],width=800,height=800,weightFactor=1
    )
],style={"width":"400px"})

if __name__ == '__main__':
    app.run_server(debug=True)
