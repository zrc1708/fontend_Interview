<template>
    <div class="component1">
        <p>子组件</p>
        <p>从父组件获取的值：{{title}}</p>
        <button @click="emitToParent">点击向父组件传值</button>
        <slot></slot>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:['title'],
    methods:{
        emitToParent(){
            this.$emit('child-event','子组件向父组件传值')
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
    left: 50%;
    top: 60%;
    transform: translate(-50%,-50%);
}
</style>