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

修改代码如下：

```
db.once('open', function() {
  User.find().exec(function(err, users) {
    console.log(users);
  });
});
```

这样，我们到　express-hello 文件夹中，运行，可以看到如下输出结果


```
$ node index.js
running on port 3000...
[ { _id: 584b62b830a2a2cbf4c4c3f6,
    username: 'billie66',
    email: 'billie@billie66.com' },
  { _id: 584bb045ff8f0f1c7ba4fe24,
    username: 'inCode',
    email: 'inCode@incode.com',
    __v: 0 } ]
```

可以看到，终端中可以打印出所有数据文档。证明我们的　mongoose 的　find() 接口
使用正确。

但是，我们为何不把代码写成这样呢？

```
let users = User.find();
conole.log(users)
```

答案是：　find() 接口是一个**异步函数**，所以它的返回值　`users` 只能
在回调函数中使用。`.exec` 字面意思就是**执行**，我们把回调函数穿给它做参数。

关于**同步**和**异步** 后面我们开专题再讲。

### 用 API 来返回　JSON

上面数据虽然拿到，但是如果想提供给客户端使用：

- 第一步，把它要封装成一个　API
- 第二步，数据格式转换为　JSON

先来做第一步，代码做出如下调整：

```
db.once('open', function() {
  console.log('success');
});

app.get('/users', function(req, res){
  User.find().exec(function(err, users) {
    console.log(users);
  });
})
```

上面把　User.find() 代码封装到了一个　API ( Web API ) 。这样，
触发条件就变了。只有当客户端发出　`GET /users` 请求的时候，User.find()
代码才会被执行。

暂时，我们用　curl 来模拟一下客户端请求：

```
curl -X GET http://localhost:3000/users
```

但是，此时，curl 请求不到任何返回信息，因为　`console.log(users)` 只会把
信息打印到后台终端。curl 请求不到信息，未来浏览器也就请求不到。所以要把这一行
改为

```js
// res.send() 可以数据返回给客户端，但是我们要的是　json ，所以用下面接口
res.json()
```

也就是要写成这样：

```js
app.get('/users', function(req, res){
  // res.json({"users": "happypeter"});
  User.find().exec(function(err, users) {
    res.json({users});
  });
})
```
