<template>
    <div class="component2">
        <p>孙子组件</p>
        <p>从父组件获取的值：{{parent.message}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    inject:['parent']
}
</script>
<style lang="less" scoped>
.component2{
    width: 150px;
    height: 120px;
    background-color: yellow;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%,-50%);
}
</style>