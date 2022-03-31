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
            count: 0,
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        mutations: {
            // 修改state的mutation方法
            // 每一个mutation方法都有对应的参数
            // state指的就是当前vuex中的state对象
            // payload 载荷 提交mutation的方法都时候 传递的参数 它可以是任何形式的 任何类型的值
            addCount(state, payload) {
                state.count += payload

            }
        },
        // 异步动作
        // 从后端获取一个数 更新到state的count中
        actions: {
            // 方法
            // action方法参数
            // 第一个参数 执行的上下文对象
            // context 相当于 组件中的 this.$store store的运行实例
            getAsyncCount(context, params) {
                setTimeout(function() {
                    context.commit('addCount', params)

                }, 1000);
            }

        },
        getters: {
            // 放置的所有的vuex的计算
            // state指的就是 当前store中的state 
            // filterList: function() {
            //     return state.list.filter(item => item > 5)
            // }
            filterList: state => state.list.filter(item => item > 5),
            token: state => state.user.token,
            name: state => state.setting.name,

        },
        modules: {
            // 放置子模块的属性
            user: {
                namespaced: true,
                state: {
                    token: '12345'
                },
                mutations: {
                    updateToken(state) {
                        state.token = '67890'
                    },
                }
            },
            setting: {
                state: {
                    name: 'vuex实例'
                }
            }
        }
    }) //实例化一个Vuex


new Vue({
    render: h => h(App),
    store
}).$mount('#app')