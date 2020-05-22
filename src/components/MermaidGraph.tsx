import { Component, ReactNode, createElement } from "react";
import classNames from "classnames";

import mermaid from "mermaid";
import { Alert } from "./Alert";

export interface MermaidGraphProps {
    defaultValue?: string;
    value?: string;
    className?: string;
    style?: object;
    bootstrapStyle?: BootstrapStyle;
    showSVGSaveButton: boolean;
    clickable?: boolean;
    buttonLabelText: string;
    onClickAction?: () => void;
    getRef?: (node: HTMLElement) => void;
}
interface State {
    error: string;
};

export type BootstrapStyle = "default" | "info" | "inverse" | "primary" | "danger" | "success" | "warning";

export class MermaidGraph extends Component<MermaidGraphProps, State> {

    state = {
        error: null
    };

    componentDidMount() {
        mermaid.initialize({
            startOnLoad: false, securityLevel: 'loose'
        });

        this.renderSvg();
    }

    componentDidUpdate(prevProps: MermaidGraphProps, prevState: State) {
        if (prevProps.value != this.props.value || prevProps.defaultValue != this.props.defaultValue) {
            this.renderSvg();
        }
    }

    svgCreated = (svgGraph: any) => {
        const container = document.getElementById('svg_container');
        if (container) {
            container.innerHTML = svgGraph;
        }
    };

    shouldComponentUpdate(nextProps: MermaidGraphProps, nextState: State) {
        return nextProps.value != this.props.value
            || nextProps.defaultValue != this.props.defaultValue
            || nextState.error != this.state.error;
    }

    renderSvg = () => {
        try {
            const graphDefinitiion = this.props.value || this.props.defaultValue || '';
            mermaid.parse(graphDefinitiion);
            mermaid.render('svg_content', graphDefinitiion, this.svgCreated);
            this.setState({ error: null });
        } catch (err) {
            const errorString = err.str ?? JSON.stringify(err);
            console.warn(errorString);
            this.setState({ error: errorString });
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
                {this.state.error && <Alert bootstrapStyle="warning" message={this.state.error} />}
                <div id='svg_container' className={classNames("widget-mermaidwidget", this.props.className, { [`label-${this.props.bootstrapStyle}`]: !!this.props.bootstrapStyle })}
                    onClick={this.props.onClickAction}
                    ref={this.props.getRef}
                    style={this.props.style}>
                </div>
                {this.props.showSVGSaveButton &&
                    <div>
                        <button type='button' className={classNames("btn mx-button", this.props.className, { [`label-${this.props.bootstrapStyle}`]: !!this.props.bootstrapStyle })} style={this.props.style} onClick={this.saveSvg}>Save as SVG</button>
                    </div>
                }
            </div>
        );
    }
}