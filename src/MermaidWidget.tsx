import { Component, ReactNode, createElement } from "react";
import { hot } from "react-hot-loader/root";

import { MermaidWidgetContainerProps } from "../typings/MermaidWidgetProps";
import { MermaidGraph } from "./components/MermaidGraph";
import "./ui/MermaidWidget.css";

export class MermaidWidget extends Component<MermaidWidgetContainerProps> {
    //private readonly onClickHandler = this.onClick.bind(this);

    render(): ReactNode {

        return (
            <MermaidGraph
                bootstrapStyle={this.props.bootstrapStyle}
                className={this.props.class}
                // clickable={!!this.props.onClickAction}
                defaultValue={this.props.DefaultValue ? this.props.DefaultValue : ""}
                value={this.props.valueAttribute ? this.props.valueAttribute.displayValue : ""}

                // onClickAction={this.onClickHandler}
                style={this.props.style} />
        );
    }

    /*private onClick(): void {
        if (this.props.onClickAction && this.props.onClickAction.canExecute) {
            this.props.onClickAction.execute();
        } 
    } */
}

export default hot(MermaidWidget);
