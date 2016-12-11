---
title: 打通全栈
---

这一节算是前面的几节内容的综合使用。所谓全栈项目，要有这几层技术组成：

- 最贴近用户的，是 React
- HTTP 请求，用 axios
- 后台，我们使用 express
- 最底层，海量数据，用 Mongodb

在，https://happypeter.github.io/digicity/express/2-with-react.html 中，我们实际已经打通了三层技术，同时 https://happypeter.github.io/digicity/express/4-mongoose.html 中
我们又学习了 MongoDB 。本节就来综合使用这两部分知识。从而打通全栈。

我们分几个具体任务来完成：

### 使用 Mongoose 来查询所有用户

首先，保证 mongodb 处于运行状态，然后，通过　mongo-express 查看一下，
mongodb 中是否有多个用户。

实际工作中，开发者是通过看　[Mongoose 的　API 文档](http://mongoosejs.com/docs/api.html) 来解决这个问题。但是起步阶段，
还是要先通过教程，来学习一些最基本的使用，后续才会有你能力看　API 文档。

参考：http://haoqicat.com/react-express-api/5-rest-api



```
db.once('open', function() {
  User.find().exec(function(err, posts) {
    console.log(posts);
  });
});
```
