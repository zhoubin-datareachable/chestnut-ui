/**
 * @file
 * @date 2021-06-24
 * @author zhoubin
 * @lastModify zhoubin 2021-06-24
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import * as React from 'react';
import style from './style.module.scss';
import ClassName from '../../../Utils/ClassName';
import Keys from '../../../Utils/keys';
import useMergedState from '../../../Utils/hooks/useMergedState';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export type SwitchChangeEventHandler = (
    checked: boolean,
    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
) => void;

export type SwitchClickEventHandler = SwitchChangeEventHandler;
export interface SwitchProps {
    /** 是否禁用 */
    disabled?: boolean;
    /** 初始是否选中 */
    defaultChecked?: boolean;
    /** 指定当前是否选中 */
    checked?: boolean;
    /** 选中时的内容 */
    checkedChildren?: React.ReactNode;
    /** 未选中时内容 */
    unCheckedChildren?: React.ReactNode;
    /** 变化时回调函数 */
    onChange?: SwitchChangeEventHandler;
    /** 点击时回调函数 */
    onClick?: SwitchClickEventHandler;
    /** 键盘按下时回调函数 */
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Switch: React.FC<SwitchProps> = ({
    disabled,
    checked,
    checkedChildren,
    unCheckedChildren,
    defaultChecked,
    onChange,
    onClick,
    onKeyDown,
}): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    // const [checked, SetChecked] = useState(false);
    const [innerChecked, setInnerChecked] = useMergedState<boolean>(false, {
        value: checked,
        defaultValue: defaultChecked,
    });
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /** 改变状态 */
    const triggerChange = (
        newChecked: boolean,
        event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
    ) => {
        event.persist();
        let mergedChecked = innerChecked;
        if (!disabled) {
            /** 改变状态会触发onChange事件 */
            mergedChecked = newChecked;
            setInnerChecked(mergedChecked);
            onChange?.(mergedChecked, event);
        }
        return mergedChecked;
    };

    /** onclick */
    const onInternalClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // 触发onchange事件
        const ret = triggerChange(!innerChecked, e);
        // 触发自动的onclick事件
        onClick?.(ret, e);
    };

    /** onkeyDown */
    const onInternalKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        // 判断按下的按键并触发onchange事件
        if (e.key === Keys.ARROW_LEFT) {
            triggerChange(false, e);
        } else if (e.key === Keys.ARROW_RIGHT) {
            triggerChange(true, e);
        }
        onKeyDown?.(e);
    };
    const switchClassName = ClassName(
        'chestnut-switch',
        { checked: innerChecked, disabled: disabled || false },
        style,
    );
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <button
            disabled={disabled}
            className={switchClassName}
            onClick={onInternalClick}
            onKeyDown={onInternalKeyDown}
        >
            <span className={style['chestnut-switch-inner']}>
                {innerChecked ? checkedChildren : unCheckedChildren}
            </span>
        </button>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
