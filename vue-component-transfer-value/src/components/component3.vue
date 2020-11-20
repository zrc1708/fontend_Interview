<template>
    <div class="component1">
        <p>子组件的兄弟组件</p>
        <p>从子组件获取的值：{{message}}</p>
    </div>
</template>
<script>
import eventBus from '../js/eventBus.js'

export default {
    data(){
        return{
            message:''
        }
    },
    created:function(){
        this.btn();
    },
    methods:{
        btn:function(){
            eventBus.$on("mybus",(message)=>{   //这里最好用箭头函数，不然this指向有问题
                this.message = message      
            })
        }
    }
    
}
</script>
<style lang="less" scoped>
.component1{
    width: 250px;
    height: 250px;
    background-color: lightgreen;
    position: absolute;
    left: 70%;
    top: 60%;
    transform: translate(-50%,-50%);
}
</style>