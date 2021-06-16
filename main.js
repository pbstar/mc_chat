import Vue from 'vue'
import App from './App'
import cooluni from "cl-uni";

Vue.use(cooluni, {
	homePage: "/pages/friend/friend"
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
