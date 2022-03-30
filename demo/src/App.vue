<template lang="">
  <div>
    <!-- 原始形式的引用 -->
    <div>原始形式获取state状态:{{$store.state.count}}</div>
    <div>原始形式获取state状态:{{count}}</div>
    <ChildA/>
  </div>
</template>
<script>
import ChildA from './components/child-a.vue'
import {mapState} from 'vuex'
export default {
  name:'App',
  components:{
      ChildA
  },
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