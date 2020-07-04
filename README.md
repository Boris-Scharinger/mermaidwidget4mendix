## MermaidWidget
Renders mermaid graph markup code using the great <a href="https://mermaid-js.github.io/mermaid/#/README">mermaid library (v8.5)</a> for
<ul>
<li>Flow diagrams (top down and left to right)</li>
<li>Sequence diagrams</li>
<li>Gantt charts</li>
<li>Class digrams</li>
<li>Entity relationship diagrams</li>
<li>Github diagrams (experimental)</li>
</ul>

## Features
<ul>
<li>uses any Mendix entity string attribute for the Graph Definition</li>
<li>displays a rendering error 'alert style'</li>
<li>provides optional button to save the resulting SVG locally</li>
<li>can have an onClick action</li>
</ul>  

## Usage
<ol>
<li>Create or use an entity with a string attribute (long enough to carry the graph definition)</li>
<li>Fill it somehow. Extensive documentation about the graph definition language on the <a href="https://mermaid-js.github.io/mermaid/#/">mermaid project's pages</a>.</li>
<li>Place the mermaid widget on a page and configure it to use the string attribute</li>
<li>Further Settings:</li>
<ol>
    <li><b>Mermaid CSS properties:</b> Allows to provide mermaid with a couple of Cascading styles that influence color, paddings etc. of the graph itself. (Not super easy to use - however a mermaid implementation topic.)</li>
    <li>Option to display a <b>SVG download button</b> and respective settings for button caption and button style</li>
    <li><b>OnClick action:</b>Option to select what happens if someone clicks on the Graph</li>
    </ol>
</ol>

## Current Limitations
<ol>
    <li>Would love to be able to pass the resulting SVG into a system.image but failed to far to get that sorted.</li>
    <li>Styling the graph is tricky. I would love to find an easy way to impose bootstrap styles properly.</li>
    <li>OnCLick Action does not pass any information about where the user has clicked.</li>
</ol>

## Dependencies
<ol>
    <li>Uses Pluggable Widget technology, so I guess that's >Mendix 8.4</li>
    <li>Mermaid Library 8.5 (npm). License: MIT</li>
</ol>

## Demo project
A small demo project can be found here: <a href="https://mermaid100-sandbox.mxapps.io/index.html?profile=Responsive">https://mermaid100-sandbox.mxapps.io/</a>

## Issues, suggestions and feature requests
Link to <a href="https://github.com/Boris-Scharinger/mermaidwidget4mendix/issues">GitHub issues</a>.

## Development and contribution
Thanks to Andrei Buntsev for helping me to integrate this in Mendix
Thanks and kudos to  Knut Sveidqvist for inventing mermaid and to all of the <a href="https://github.com/mermaid-js/mermaid/graphs/contributors">mermaid contributors</a>.

