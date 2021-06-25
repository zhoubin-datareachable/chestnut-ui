/**
 *
 * @param prefixCls 前缀
 * @param classNames 需要添加的类
 * @param style 样式
 * @returns 样式
 */
const ClassName = function (
    prefixCls: string,
    classNames: {
        [className: string]: boolean;
    },
    style: { [className: string]: string },
) {
    let cla = `${style[prefixCls]} `;
    const Obj = Object.keys(classNames);
    for (const c of Obj) {
        if (classNames[c] === true) {
            cla += `${style[prefixCls + '-' + c]} `;
        }
    }
    return cla;
};

export default ClassName;
