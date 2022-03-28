import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex) //注册Vuex的功能 Vue.use的方法实际上是调用了Vuex
    // 中的一个install的方法
const store = new Vuex.Store({
        // 实例化Vuex的构造参数 state mutations actions
        state: {
            // 存储的状态
            count: 0
        }
    }) //实例化一个Vuex


new Vue({
    render: h => h(App),
    store
}).$mount('#app')