/**
 * This file was generated from MermaidWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export type BootstrapStyleEnum = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export interface MermaidWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    valueAttribute?: EditableValue<string>;
    themeCSS?: string;
    showSVGdownloadButton: boolean;
    downloadButtonLabelText: DynamicValue<string>;
    bootstrapStyle: BootstrapStyleEnum;
    onClickAction?: ActionValue;
}

export interface MermaidWidgetPreviewProps {
    class: string;
    style: string;
    valueAttribute: string;
    themeCSS: string;
    showSVGdownloadButton: boolean;
    downloadButtonLabelText: string;
    bootstrapStyle: BootstrapStyleEnum;
    onClickAction: {} | null;
}
