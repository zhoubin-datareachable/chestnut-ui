/**
 * @file
 * @date 2020-09-04
 * @author Mark
 * @lastModify Mark 2020-09-04
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "./style.module.scss";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    type?: "primary" | "secondary" | "danger" | "none";
    size?: "normal" | "small" | "big";
    /**
     * How wide should the button be?
     */
    width?: string;
    /**
     * How high should the button be?
     */
    height?: string;
    /**
     * What text should the button display?
     */
    label?: JSX.Element | string;

    /**
     * Optional click handler
     */
    onClick?: (e: React.MouseEvent) => void;
    /**
     * disable button event
     */
    disabled?: boolean;
    /**
     * is loading state or not
     */
    loading?: boolean;
    icon?: IconDefinition;

    /**
     * class name
     */
    className?: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Button: React.FC<ButtonProps> = ({
    type = "none",
    label = "Button",
    height = "3.2rem",
    size = "normal",
    width = undefined,
    onClick = undefined,
    disabled = undefined,
    loading = undefined,
    icon = undefined,
    className = undefined,
}: ButtonProps) => {
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /**
     * get different size style
     */
    const getButtonSizeStyle = () => {
        switch (size) {
            case "normal":
                return style.button_button__normal;
            case "small":
                return style.button_button__small;
            case "big":
                return type === "primary"
                    ? style.button_button__big
                    : type === "secondary"
                    ? style.button_secondaryButton__big
                    : undefined;
        }
    };
    /**
     * this function will select the button style
     * @param {sting} type the type of the button, primary, secondary or danger
     */
    const getButtonStyle = (type: string): string => {
        if (type === "primary") {
            return [
                style.button_button__primary,
                size === "big" ? undefined : style.button__button__pressed,
                disabled || loading || size === "big"
                    ? undefined
                    : style.button__primaryButton__hover,
                getButtonSizeStyle(),
            ].join(" ");
        } else if (type === "secondary") {
            return [
                style.button_button__secondary,
                disabled || loading || size === "big"
                    ? undefined
                    : style.button__secondaryButton__hover,
                getButtonSizeStyle(),
            ].join(" ");
        } else if (type === "danger") {
            return style.button_button__danger;
        }
        return style.button_button__primary;
    };

    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <button
            className={
                getButtonStyle(type) + (className ? " " + className : "")
            }
            style={Object.assign({
                height: height,
                width: width,
                background: disabled ? "gray" : undefined,
                color: disabled ? "white" : undefined,
                border: disabled ? "none" : undefined,
                cursor: disabled || loading ? "default" : undefined,
            })}
            onMouseDown={(e) => {
                if (type === "primary" && size !== "big") {
                    e.currentTarget.classList.remove(
                        style.button__button__pressed
                    );
                }
            }}
            onMouseUp={(e) => {
                if (type === "primary" && size !== "big") {
                    e.currentTarget.classList.add(
                        style.button__button__pressed
                    );
                }
            }}
            onClick={(e) => {
                onClick && onClick(e);
            }}
            disabled={Boolean(disabled || loading)}
        >
            {loading && <div className={style.button_loadingDot}></div>}
            {loading ? "Loading" : label}
            {icon && (
                <span>
                    <FontAwesomeIcon icon={icon} />
                </span>
            )}
        </button>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
