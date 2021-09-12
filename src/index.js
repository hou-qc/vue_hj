import Vue from "vue";
import App from './app.vue'
Vue.config.productionTip = false; //取消提示
//全局注册组件
// Vue.component('HelloWorld',HelloWorld)
new Vue({
    el: '#root',
    // render: h => h(App)
    render: function (createElement) {    //用来渲染组件标签的回调函数
        return createElement(App)  // 返回<App/>
    } //调用render函数得到它的返回的组件标签对象
})