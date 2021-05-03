import './css/bin.css';
import Bin from'./Bin';
window.onload =  () => {
    let bin = new Bin();
    console.log('rem布局最高标签font-size大小:' + bin.remStyle());
    console.log('中国城市级联：' + bin.chinaArea());
    console.log('判断支付客户端' + bin.clientPay());
}