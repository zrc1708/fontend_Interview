## vuex的五大核心
+ 1.State（数据）  
用来存放数据源，就是公共状态
+ 2.Getters（数据加工）  
有的时候需要对数据源进行加工，返回需要的数据
+ 3.Mutations（事件）  
操作结束之后，actions通过commit更新state数据源
+ 4.Actions（执行）  
要执行的操作，可以进行同步或者异步事件
+ 5.Module  
使用单一状态树，致使应用的全部状态集中到一个很大的对象，所以把每个模块的局部状态分装使每一个模块拥有本身的 state、mutation、action、getters、甚至是嵌套子模块；
## vuex的工作流程
+ 1.客户端操作事件，dispatch调用一个action
+ 2.actions接收到这个事件之后，在actions中可以执行一些异步|同步操作，根据不同的情况去分发给不同的mutations，
+ 3.mutation接收一个type类型触发对应的函数，修改state值
+ 4.state更改后对应的view视图在render的作用下重新渲染