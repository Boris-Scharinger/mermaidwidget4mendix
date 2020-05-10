import { Component, ReactNode, createElement } from "react";
import { MermaidGraph, MermaidGraphProps } from "./components/MermaidGraph";
import { MermaidWidgetPreviewProps } from "../typings/MermaidWidgetProps";

declare function require(name: string): string;

export class preview extends Component<MermaidWidgetPreviewProps> {
    render(): ReactNode {
        return (
            <div ref={this.parentInline}>
                <MermaidGraph {...this.transformProps(this.props)}></MermaidGraph>
            </div>
        );
    }

    private parentInline(node?: HTMLElement | null): void {
        // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
        if (node && node.parentElement && node.parentElement.parentElement) {
            node.parentElement.parentElement.style.display = "inline-block";
        }
    }

    private transformProps(props: MermaidWidgetPreviewProps): MermaidGraphProps {
        return {
            bootstrapStyle: props.bootstrapStyle,
            className: props.class,
            clickable: false,
            //style: props.styleObject,
            defaultValue: props.DefaultValue ? props.DefaultValue : "",
            value: props.valueAttribute,
            showSVGSaveButton: props.showSVGSaveButton
        };
    }
}

export function getPreviewCss(): string {
    return require("./ui/MermaidWidget.css");
}
