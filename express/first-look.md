---
title: 上手 Express 框架
---

前面课程中介绍了 React , React 是一个 **前端框架** ，前端框架是运行在浏览器
环境下的，负责 UI（ User Interface 用户界面）。

但是，我们想一想，如果只有 UI ，那么用户要看的数据从哪里来？用户需要保存的数据
如何进行运算之后保存到数据库中？这部分的功能就需要后端代码来完成。今天我们要介绍的
Express 就是一个后台框架。

我们可能知道，当下实现后台服务，最流行的方式就是使用 Nodejs , Express 就是 Nodejs 的
一个框架，而且是 Nodejs 各种后台框架中最为通用，最为流行的一个，没有之一。所以学习 Nodejs
最佳途径就是从 Express 入手。



### 你好，Express

Express 的官网位置是 http://www.expressjs.com.cn/ 。官网上，首页最能吸引
我们注意的就是 **API** 这个关键字。API 是**应用开发接口**，简称**接口** 。而
Express 就是用来制作后台接口的，或者说叫制作后台 API 的。

那么之后，我们整个项目的架构，就是用 Express 来制作后台 API , 这些 API 的使用
者就是前台 React 代码。


### Hello World

现在我们就动手来写一个最简单的 Express 小程序。

第一步，要新建文件夹，并把它初始化为一个 Nodejs 项目：

```
mkdir express-hello
cd express-hello
npm init -y
```

这样文件夹内就会生成一个 package.json ，有了这个文件，我们这个文件夹就可以
叫做一个 **Nodejs 项目** 了 。

### 补充知识：框架，库，工具

- 工具：就是完成特定的一个小功能的软件，比如 Babel
- 库： 英文叫 lib ，我们每天 import 的东西，都是库。库是把一系列相关工具，组织到一起。例如，lodash ，react 。库里面的东西虽然多，但是都是干一类工作的。
- 框架：英文是 framework ，是把很多类功能的工具和库集合到一起，目的是完成整个项目。
  例如，RubyOnRails，Django ，J2EE ，React+friends ，Anguler ，Meteor 。




































































后台框架
