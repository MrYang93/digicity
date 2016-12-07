---
title: React 牵手 Express
---

仅仅有了 API ，功能还不完全。需要有前端来调用 API ，完成
整个小功能。

在我们《JS 独孤求败》课程体系里面，前端代码我们都是用 React 来写，
所以前端和后端都是用 JS 来写。但是这里要提醒大家的是，前端和后端是
完全独立的两个项目，通过 API 来作为桥梁。其实，我们后端虽然是 Nodejs 写的，但是前端用 PHP/JAVA 也能写。

### 前端项目准备

前面的课程中，我们已经学习了 React 开发。那么先在就来写一个完全
跟后台无关的 React 的 Hello World ，要求：

- 页面最终显示出来的，就是你的用户名，例如 happypeter
- 要用到 react 的 state ，constructor ，生命周期
- 用 ES6/Babel/Webpack

小贴士：创建 React 应用的脚手架项目
可以推荐的是 https://github.com/facebookincubator/create-react-app
但是，我们需要对 Webpack 底层做一些了解，所以暂时不推荐使用
脚手架
小贴士结束


代码如下：

```
