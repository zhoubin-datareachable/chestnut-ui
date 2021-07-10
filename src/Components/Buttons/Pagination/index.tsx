/**
 * @file
 * @date 2021-07-10
 * @author zhoubin
 * @lastModify zhoubin 2021-07-10
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from 'react';
import style from './style.module.scss';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
export interface PaginationProps {
    type: string;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
export const Pagination: React.FC<PaginationProps> = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <ul className={style['chestnut-pagination']}>
            <li className={style['chestnut-pagination-prev']}>
                <button>z</button>
            </li>
            <li className={style['chestnut-pagination-next']}>
                <button>y</button>
            </li>
        </ul>
    );
};
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
