import { Component, ReactNode, createElement } from "react";
import classNames from "classnames";

import mermaid from "mermaid";

export interface MermaidGraphProps {
    defaultValue?: string;
    value?: string;
    className?: string;
    style?: object;
    bootstrapStyle?: BootstrapStyle;
    showSVGSaveButton: boolean;
    clickable?: boolean;
    onClickAction?: () => void;
    getRef?: (node: HTMLElement) => void;
}
interface State { };

export type BootstrapStyle = "default" | "info" | "inverse" | "primary" | "danger" | "success" | "warning";

export class MermaidGraph extends Component<MermaidGraphProps, State> {
    componentDidMount() {
        mermaid.initialize({
            startOnLoad: true, securityLevel: 'loose'
        });
        mermaid.contentLoaded();
    }

    componentDidUpdate() {
        mermaid.render('svg_content', this.props.value || this.props.defaultValue || '', this.svgCreated);
    }

    svgCreated = (svgGraph: any) => {
        const container = document.getElementById('svg_container');
        if (container) {
            container.innerHTML = svgGraph;
        }
    };

    saveSvg = () => {
        const svgData = document.getElementById('svg_content').outerHTML;
        const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
        const svgUrl = URL.createObjectURL(svgBlob);
        const downloadLink = document.createElement("a");
        downloadLink.href = svgUrl;
        downloadLink.download = "graph.svg";
        document.body.appendChild(downloadLink);
        downloadLink.click(); 
        document.body.removeChild(downloadLink);
    };


    render(): ReactNode {
        return (
            <div>
                <div id='svg_container' className={classNames("widget-mermaidwidget", this.props.className, { [`label-${this.props.bootstrapStyle}`]: !!this.props.bootstrapStyle })}
                    onClick={this.props.onClickAction}
                    ref={this.props.getRef}
                    style={this.props.style}>
                </div>
                { this.props.showSVGSaveButton &&
                    <div>
                    <button type='button' className={classNames("btn mx-button", this.props.className, { [`label-${this.props.bootstrapStyle}`]: !!this.props.bootstrapStyle })} style={this.props.style} onClick={this.saveSvg}>Save as SVG</button>
                    </div>
                }
            </div>
        );
    }
}