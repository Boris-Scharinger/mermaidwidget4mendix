## MermaidForMendix
Renders mermaid graph markup code using the great mermaid library (v8.14) for
- Flow diagrams (top down and left to right)
- Sequence diagrams
- Gantt charts
- Class digrams
- Entity relationship diagrams
- Github diagrams (experimental)

## Features
- uses any Mendix entity string attribute for the Graph Definition
- displays a rendering error 'alert style'
- provides optional button to save the resulting SVG locally
- can have an onClick action

## Usage
1. Create or use an entity with a string attribute (long enough to carry the graph definition)
2. Fill it somehow. Extensive documentation about the graph definition language on the mermaid project's pages.
3. Place the mermaid widget on a page and configure it to use the string attribute
4. Further Settings:
4.1 Mermaid CSS properties: Allows to provide mermaid with a couple of Cascading styles that influence color, paddings etc. of the graph itself. (Not super easy to use - however a mermaid implementation topic.)
4.2 Option to display a SVG download button and respective settings for button caption and button style
4.3 OnClick action:Option to select what happens if someone clicks on the Graph

## Current Limitations
1. Would love to be able to pass the resulting SVG into a system.image but failed to far to get that sorted.
2. Styling the graph is tricky. I would love to find an easy way to impose bootstrap styles properly.
3. OnCLick Action does not pass any information about where the user has clicked.

## Dependencies
- Uses Pluggable Widget technology, so I guess that's >Mendix 8.4
- Mermaid Library 8.14. License: MIT

## Demo project
A small demo project can be found here: https://mermaid100-sandbox.mxapps.io/

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution
Thanks to Andrei Buntsev for helping me to integrate this in Mendix Thanks and kudos to Knut Sveidqvist for inventing mermaid and to all of the mermaid contributors.
