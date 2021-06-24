/**
 * @file
 * @date 2021-06-24
 * @author zhoubin
 * @lastModify zhoubin 2021-06-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import style from './style.module.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface SwitchProps {
    type?: 'primary' | 'secondary' | 'danger' | 'none';
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Switch: React.FC<SwitchProps> = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [checked, SetChecked] = useState(false);
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    const switchClassName = () => {
        if (checked) {
            return `${style['chestnut-switch']} ${style['chestnut-switch-checked']}`;
        } else {
            return `${style['chestnut-switch']}`;
        }
    };
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <button className={switchClassName()} onClick={() => SetChecked(!checked)}>
            <span className={style['chestnut-switch-inner']}></span>
        </button>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
