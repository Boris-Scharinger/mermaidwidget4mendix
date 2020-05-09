import { Component, ReactNode, createElement } from "react";
import classNames from "classnames";

import mermaid from "mermaid";

export interface MermaidGraphProps {
    defaultValue?: string;
    value?: string;
    className?: string;
    style?: object;
    bootstrapStyle?: BootstrapStyle;
    // clickable?: boolean;
    // onClickAction?: () => void;
    getRef?: (node: HTMLElement) => void;
}

export type BootstrapStyle = "default" | "info" | "inverse" | "primary" | "danger" | "success" | "warning";

export class MermaidGraph extends Component<MermaidGraphProps> {
    componentDidMount() {
        mermaid.initialize({
            startOnLoad: true, securityLevel: 'loose'
          });
        mermaid.contentLoaded();
      }

      componentDidUpdate() {
        mermaid.render();
      }
      
    render(): ReactNode {
        return (
            <span
                className={classNames("widget-mermaidwidget", this.props.className, {
                    [`label-${this.props.bootstrapStyle}`]: !!this.props.bootstrapStyle
                })}
                // onClick={this.props.onClickAction}
                ref={this.props.getRef}
                style={this.props.style}
            >
                <div className="mermaid">{this.props.value || this.props.defaultValue}</div>
            </span>
        );
    }
}