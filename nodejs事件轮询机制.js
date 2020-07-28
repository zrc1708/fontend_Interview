/**
 * 面试题：node.js事件轮询机制
 */
setTimeout(()=>{
    console.log('setTimeout')
},0)

setImmediate(()=>{
    console.log('setImmediate')
})

process.nextTick(()=>{
    console.log('process.nextTick')
})

/*
process.nextTick
setTimeout
setImmediate
 */

/*nodejs 的事件轮询机制：借助libuv库实现的
    概括事件轮询机制，分为6个阶段： 
    1 . timers 定时器阶段
        计时和执行到点的定时器回调函数 
    2 · pending callbacks 
        某些系统操作（例如 TCP 错误类型）的回调函数 
    3 . idle , prepare 
        准备工作 
    4 . poll 轮询阶段（轮询队列）
        如果轮询队列不为空，依次同步取出轮询队列中第一个回调函数执行，直到轮询队列为空或者达到系统最大的限制
        如果轮询队列为空
        如果之前设置过 setImmediate函数
            直接进入下一个 check阶段
        如果之前没有设置过 setImmediate函数
            在当前poll阶段等待
                直到轮询队列添加回调函数，就去第一个情况执行
                如果定时器到点了，也会去下一个阶段
    5 . check查阶段
        执行setImmediate设置的回调函数
    6 . close callback 关闭阶段
        执行close事件回调函数

    process.nextTick能在任意阶段优先执行
*/
