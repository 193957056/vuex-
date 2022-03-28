<template lang="">
  <div>
    <!-- 原始形式的引用 -->
    <div>原始形式获取state状态:{{$store.state.count}}</div>
    <div>原始形式获取state状态:{{count}}</div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name:'App',
  computed: {
    // count(){
    // return this.$store.state.count

    // }
    ...mapState(['count'])
},
}
</script>
<style lang="">
  
</style>