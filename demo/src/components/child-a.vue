<template lang="">
    <div>
        <button @click="test">+1（原始形式）</button>
        <button @click="addCount(100)">+100（辅助形式）</button>
        <button @click="test1">+100（异步调用 原始形式）</button>
        <button @click="getAsyncCount(1000)">+100（异步调用 辅助形式）</button>
        <p>原始形式getters:{{$store.getters.filterList}}</p>
        <p>辅助形式getters:{{filterList}}</p>

    </div>
</template>
<script>
import {mapMutations,mapActions,mapGetters} from 'vuex'
export default {
    computed: {
        // 将getters中的计算属性导入到组件的计算属性中
        ...mapGetters(['filterList'])
    },
    methods: {
        test(){
            // 调用mutation方法 提交mutation方法
            // commit(mutation名称)
            // 给mutation传值，commit的第二个参数就是要传递的载荷 payload 就是传入的参数
            this.$store.commit("addCount",11)
        },
        test1(){
            // 原始形式
            // commit是提交mutations
            // dispatch 调用action
            // dispatch（action的名称，传递参数）
            // 传递参数
            this.$store.dispatch('getAsyncCount',111)
        },
       ... mapMutations(['addCount']),
       ...mapActions(['getAsyncCount'])
    },
}
</script>
<style lang="">
    
</style>