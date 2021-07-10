/**
 * @file
 * @date 2021-07-10
 * @author zhoubin
 * @lastModify zhoubin 2021-07-10
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { ChangeEvent } from 'react';
import ClassName from '../../../Utils/ClassName';
import useMergedState from '../../../Utils/hooks/useMergedState';
import style from './style.module.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (e: ChangeEvent) => void;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    defaultChecked,
    disabled = false,
    onChange,
}): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [innerChecked, setInnerChecked] = useMergedState<boolean>(false, {
        value: checked,
        defaultValue: defaultChecked,
    });
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /** 处理checkbox改变 */
    const handleChange = (e: ChangeEvent) => {
        if (disabled) {
            return;
        }
        if (!checked) {
            setInnerChecked((e.target as HTMLInputElement).checked);
        }
        onChange && onChange(e);
    };
    const checkboxClassName = ClassName(
        'chestnut-checkbox',
        {
            checked: innerChecked,
            disabled: disabled,
        },
        style,
    );
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <span className={checkboxClassName}>
            <input
                type="checkbox"
                className={style['chestnut-checkbox-input']}
                checked={!!innerChecked}
                onChange={handleChange}
            />
            <span className={style['chestnut-checkbox-inner']} />
        </span>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
