/**
 * 给子标签增加class
 */
function childrenClass(parentClass) {
    for (let i = 0; i < parentClass.length; i++) {
        for (let j = 0; j < parentClass[i].children.length; j++) {
            if (parentClass[i].children[j].className !== '') {
                parentClass[i].children[j].className += ' bin-nav-tab';
            } else if (parentClass[i].children[j].className === '') {
                parentClass[i].children[j].className += 'bin-nav-tab';
            }
        }
    }
}

/**
 * 判断footer不在底部，默认去底部
 *
 */
function autoFooter() {
    let binFooter = document.getElementsByClassName('bin-container-footer');

    // bin-no-footer-fixed
    if (binFooter.length !== 0) {//此处判断说明存在这个class
        let addEle = false;
        for (let i = 0; i < binFooter[binFooter.length - 1].classList.length; i++) {
            console.log('循环里的' + binFooter[binFooter.length - 1].classList[i].indexOf('bin-no-footer-fixed'));
            if (binFooter[binFooter.length - 1].classList[i].indexOf('bin-no-footer-fixed') <= -1) {
                addEle = true;
            }
        }
        console.log(addEle);
        if (addEle) {
            console.group('高度测试');
            console.log(document.documentElement.clientHeight);
            console.log(document.documentElement.scrollHeight);
            console.log(document.documentElement.offsetHeight);
            console.log(document.documentElement.clientHeight >= document.documentElement.scrollHeight);
            console.groupEnd();
            if (document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                binFooter[binFooter.length - 1].className += ' bin-footer-fixed';
            }
        }
    }

}

/**
 * 规定横向排列大额导航条
 */
function navTab() {
    childrenClass(document.getElementsByClassName('bin-nav'));
}

export default class {
    constructor() {
        autoFooter();
        navTab();
    }
}
