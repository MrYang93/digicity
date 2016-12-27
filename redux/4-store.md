---
title: Redux Store 数据大本营
---

Redux 是数据流管理工具。使用 Redux 的最重要的一句话：

>一切数据都要保存的 Store 之中，组件自己不保留自己的 state 数据

后续我们会学的一切的技巧基本服务于一个关系：组件和 Store 的关系。

### 为何要统一存放到 Store 中？

把所有的数据都存放到 Store 中，然后所有的组件都订阅 Store 的数据。那么数据就有了 Single Source of Truth （唯一可信数据源）。


### 创建 Store ？

其实 Store 的主体就是写到 store.js 中的傻傻的数据：

类似：

```
let comments = [
    "hello1",
    "hello2"
]
```

但是，store 中的数据，必然要涉及读和写的操作，所以我们要安装
一个包来辅助后续操作：

```
npm i --save redux
```
