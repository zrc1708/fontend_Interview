<template>
  <div id="app">
    <p>父组件</p>
    <p>父组件的值：{{message}}</p>
    <button @click="change">改变父组件的值</button>
    <my-component1 :title="message" @child-event='childEvent'>
      <my-component2 :title="message"></my-component2>
    </my-component1>
    <my-component3></my-component3>
  </div>
</template>

<script>
import component1 from './components/component1'
import component2 from './components/component2'
import component3 from './components/component3'

export default {
  data(){
    return{
      message:123
    }
  },
  components:{
    'my-component1':component1,
    'my-component2':component2,
    'my-component3':component3,
  },
  provide(){
    return{
      parent:this
    }
  },
  methods:{
    change(){
      this.message++
    },
    childEvent(val){
      console.log(val)
      this.message = val
    }
  }
}
</script>

<style lang="less">
#app{
  width: 800px;
  height: 400px;
  background-color: lightblue;
  position: relative;
}
</style>
