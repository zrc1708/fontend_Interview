<template>
    <div class="component1">
        <p>子组件</p>
        <p>从父组件获取的值：{{title}}</p>
        <button @click="emitToParent">点击向父组件和兄弟组件传值</button>
        <slot></slot>
    </div>
</template>
<script>
import eventBus from '../js/eventBus.js'

export default {
    data(){
        return{

        }
    },
    props:['title'],
    mounted(){
        this.bus()
    },
    methods:{
        emitToParent(){
            this.$emit('child-event',this.title+1)

            // 向兄弟组件传值
            eventBus.$emit("mybus",this.title+1)
        },
        bus(){
            eventBus.$emit("mybus",this.title)   //$emit这个方法会触发一个事件
        }
    }
    
}
</script>
<style lang="less" scoped>
.component1{
    width: 250px;
    height: 250px;
    background-color: pink;
    position: absolute;
    left: 30%;
    top: 60%;
    transform: translate(-50%,-50%);
}
</style>