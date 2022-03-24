import { Component, ReactNode, createElement } from "react";
import { MermaidGraph, MermaidGraphProps } from "./components/MermaidGraph";
import { MermaidForMendixPreviewProps } from "../typings/MermaidForMendixProps";

declare function require(name: string): string;

export class preview extends Component<MermaidForMendixPreviewProps> {
    render(): ReactNode {
        return (
            <div ref={this.parentInline}>
                here will be a graph!
            </div>
        );
    }
    private parentInline(node?: HTMLElement | null): void {
        // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
        if (node && node.parentElement && node.parentElement.parentElement) {
            node.parentElement.parentElement.style.display = "inline-block";
        }
    }
}

export function getPreviewCss(): string {
    return require("./ui/MermaidForMendix.css");
}
