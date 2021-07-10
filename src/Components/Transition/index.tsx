/**
 * @file
 * @date 2020-09-04
 * @author Mark
 * @lastModify Mark 2020-09-04
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from 'react';
import style from './style.module.scss';

import ClassName from '../../../Utils/ClassName';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */

type ButtonType = 'primary' | 'secondary' | 'danger' | 'default';
export interface ButtonProps {
    /** 按钮类型 */
    type?: ButtonType;
    /** 内容 */
    children?: React.ReactNode;
    /** 按钮点击时的回调 */
    onClick?: React.MouseEventHandler;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Button: React.FC<ButtonProps> = ({
    type = 'default',
    onClick,
    children,
}: ButtonProps) => {
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const buttonClassName = ClassName('chestnut-button', { [type]: true }, style);
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return <>{children}</>;
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
