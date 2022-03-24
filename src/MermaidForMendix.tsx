import { Component, ReactNode, createElement } from "react";
import { MermaidGraph } from "./components/MermaidGraph";

import { MermaidForMendixContainerProps } from "../typings/MermaidForMendixProps";

import "./ui/MermaidForMendix.css";

export default class MermaidForMendix extends Component<MermaidForMendixContainerProps> {
    render(): ReactNode {
        return (
            <MermaidGraph
                bootstrapStyle={this.props.bootstrapStyle}
                className={this.props.class}
                clickable={!!this.props.onClickAction}
                themeCSS={this.props.themeCSS}
                value={this.props.valueAttribute ? this.props.valueAttribute.displayValue : ""}
                showSVGdownloadButton={this.props.showSVGdownloadButton}
                downloadButtonLabelText={this.props.downloadButtonLabelText ? this.props.downloadButtonLabelText.value : ""}
                onClickAction={this.onClickHandler}
                style={this.props.style} 
            />
        );        
    }

    private onClickHandler(): void {
        if (this.props.onClickAction && this.props.onClickAction.canExecute) {
            this.props.onClickAction.execute();
        }
    } 
}