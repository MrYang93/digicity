---
title: 搭建基本 React-Webpack 环境
---

首先，搭建一个基本的 Webpack-React 项目。


### 创建 Github 项目

```
mkdir redux-hello
```

然后 github.com 上也添加一个同名仓库。


### 要求

可以用

```
npm start
```

来启动项目。


可以加载 main.css 文件。

可以运行一个基本的 React 组件。


### 基本环境代码

[react env ](https://github.com/happypeter/redux-hello/commit/874af1e67b880be3f3e1d3c1b4d31bfe0300e268)


接下来创建两个组件。一个叫做 PostBody ，另外一个叫做 CommentBox 。

我们就演示这两个组件间如何进行数据通信。

[two components](https://github.com/happypeter/redux-hello/commit/e7753b1d00186dc1d5f4f613cb826e7c2a60e2d9)


下面把页面 CSS 调整一下，以便后续开发：


代码：**styling only**





<!-- billie doc backout -->


https://github.com/happypeter/redux-hello/commit/0445f8a2b01af554a51e986bd474fccc5b6339bc

更新组件的状态只能通过传人给组件的 props 或者内部的 state，所以这里重新设置 CommentBox 组件的内部 state 变量 comments 的初始值为 redux store 中存储的初始 state，并且当 store 中的 state 更新的时候，获取 store 中的 state 并赋值给组件内部 state 变量 comments，从而重新渲染 CommentBox 组件，显示新添加的评论



https://github.com/happypeter/redux-hello/commit/d749c872c776e9fb83ae56fdd22883c0c81d3fdb

在评论表单的 onSubmit 事件处理函数中，当 dispatch 一个 redux action 之后，可以调用 store.getState() 方法获得 store 中更新的 state，不需要注册监听器
