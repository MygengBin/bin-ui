/**
 * rem移动端布局
 * 给出最高元素标签的:font-size数值大小
 */

 export default  () => {
    let clientWidth = document.documentElement.clientWidth;
    let nowRem = (clientWidth / 375 * 10) + '';
    return parseInt(nowRem, 10);
}
