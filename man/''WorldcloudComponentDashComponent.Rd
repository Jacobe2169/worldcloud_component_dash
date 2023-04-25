% Auto-generated: do not edit by hand
\name{''WorldcloudComponentDashComponent}

\alias{''WorldcloudComponentDashComponent}

\title{WorldcloudComponentDashComponent component}

\description{
Component WordCloud
}

\usage{
''WorldcloudComponentDashComponent(FallbackUI=NULL, color=NULL, component=NULL,
drawOutOfBound=NULL, ellipticity=NULL, fontFamily=NULL,
gridSize=NULL, height=NULL, list=NULL, minSize=NULL,
onStart=NULL, onStop=NULL, onWordDrawn=NULL, origin=NULL,
shape=NULL, weightFactor=NULL, width=NULL)
}

\arguments{
\item{FallbackUI}{Dash component. If WordCloud is not supported by the browser, this gives the displaying error component}

\item{color}{Character | named list. Color assigned}

\item{component}{Character. Component type where the wordcloud will be drawn}

\item{drawOutOfBound}{Logical. Dimension}

\item{ellipticity}{Numeric. ellipticity}

\item{fontFamily}{Character. Font family}

\item{gridSize}{Numeric. Dimension}

\item{height}{Numeric. Height of the canvas}

\item{list}{List. Contains words, or words with user-defined sizes}

\item{minSize}{Numeric. minSize}

\item{onStart}{onStart}

\item{onStop}{onStart}

\item{onWordDrawn}{onStart}

\item{origin}{List of numerics. Dimension}

\item{shape}{A value equal to: 'circle', 'cardioid', 'diamond', 'square', 'triangle', 'triangle-forward', 'triangle-upright', 'pentagon', 'star'. Shape}

\item{weightFactor}{Numeric. Calculates initial font size}

\item{width}{Numeric | character. Width of the canvas}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

