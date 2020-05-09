/**
 * This file was generated from MermaidWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type BootstrapStyleEnum = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export interface MermaidWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    valueAttribute?: EditableValue<string>;
    DefaultValue?: string;
    bootstrapStyle: BootstrapStyleEnum;
}

export interface MermaidWidgetPreviewProps {
    class: string;
    style: string;
    valueAttribute: string;
    DefaultValue: string;
    bootstrapStyle: BootstrapStyleEnum;
}
