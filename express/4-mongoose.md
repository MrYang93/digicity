---
title: 使用 Mongoose 连接 JS 和 MongoDB
---


Mongoose 是一个 JS 库，作用是把 MongoDB 的数据，封装成 JS 对象。便于
我们用 JS 代码来操作 Mongodb 。

有了 Mongoose 之后，我们就可以用 JS 代码来进行增删改查了。


参考：

- 中文参考：http://ourjs.com/detail/53ad24edb984bb4659000013
- 管网：http://mongoosejs.com/
- nodeclass: http://www.nodeclass.com/api/mongoose.html#quick_start
- 操作步骤：http://haoqicat.com/react-express-api/3-mongoose

### 装包

安装到后台 express 代码中，装包命令：

```
npm install --save mongoose
```

装包成功后，一般的步骤就是先导如，后调用。

打开 express-hello 的 index.js 文件，导入 mongoose

```
const mongoose = require('mongoose');
```


### 连接数据库

然后进行连接

```js
mongoose.connect('mongodb://localhost:27017/digicity');
// 执行此行代码之前，要保证 mongodb 数据库已经运行了，而且运行在 27017 端口
```

启动数据库，保证有一个 database 叫做 digicity 。

然后添加下面代码

```js
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});
```

如果连接数据库成功，就打印 `success` 。`once('open')` 的意思就是
"一旦打开成功" 。如果数据库没有启动，是看不到 `success` 的。

### 创建数据 model

创建一个专门的　models/user.js ，里面代码的作用是，实现一个对象跟一个
数据集合之间映射关系。

```js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String },
    email: { type: String }
  }
);
module.exports = mongoose.model('User', UserSchema);
// `User` 会自动对应数据库中的　users 这个集合
// 如果这里是　Apple 那么就会对应　apples 集合
// 如果这里是　Person 那么就会对应　people 集合
```

首先创建了一个　Schema （概要），Schema 就是用来描述这个集合中每个文档
的数据结构，具体来讲就是

- 有那几个字段（　filed ）？我们这里有两个　`username` 和　`email`
- 每个字段的类型

这样，映射关系就建立完毕。

### 保存一个文档

把　db.once 部分的代码，改成下面这个样子

```js
db.once('open', function() {
   let user = new User({username: 'inCode', email: 'inCode@incode.com'});
   user.save(function(err){
     if(err) console.log(err);
   })
  console.log('success!')
});
```

然后，后台重启　`node index.js` 看看数据库中，是否能添加一个文档。
