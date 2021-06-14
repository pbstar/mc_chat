import Vue from 'vue'
import App from './App'
import ClUni from "cl-uni";

Vue.use(ClUni, {
	// 进入业务单页时，页面栈只有一个，自定义导航左侧返回按钮跳转的路径
	homePage: "/"
});
Vue.config.productionTip = false
// Vue.prototype.goeasy = GoEasy.getInstance({
//     host:"hangzhou.goeasy.io",  //若是新加坡区域：singapore.goeasy.io
//     appkey:"BC-f8f89e19917e4d0bbdd218d42cac0996",
//     modules:['im']//根据需要，传入‘pubsub’或'’，或数组方式同时传入
// });
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
