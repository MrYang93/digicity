---
title: MongoDB 数据
---

网站运行需要有大量的数据的读取，同时用户也需要把自己的数据存储到服务器，对于海量数据的操作。
就需要有专门的软件配合，这个软件就是数据库。

当前比较流行的数据库，Oracle 甲骨文，SQL server ，这些都是商业数据库。但是，开源数据库
目前更受青睐。一个是 Mysql , 另一个是 MongoDB 。

我们课程中采用 MongoDB 数据库。MongoDB 是非关系型数据库，传统的关系型数据库的 table 表
和 record 记录，在 MongoDB 这里都有对应的替代物。


### 数据库基本概念

https://www.mongodb.com/ 是 MongoDB 的官网。http://www.mongoing.com/ 是 MongoDB
中文社区。http://www.mongodb.org.cn/ 是 MongoDB 中文网。

- MongoDB：是一个数据库软件，有时候我们简称它叫一个数据库，但是其实一个 MongoDB 运行起来
  可以里面同时运行多个数据库
- Database: 数据库。一般做法是，一个项目对应一个数据库。
- Collection: 集合。类似于关系型数据库下的*表*的概念。
- Document：文档。一个集合中会包含多个文档。文档对应关系型数据库中的 *记录* 这个概念。

举例子来说，一个项目叫 facebook ，那么我们就建立一个c database 来存储这个项目的所有数据。
可以创建多个集合，比如 users 。一个 users 集合中，可以包含多个文档，每个文档中存储一个 user
的信息（信息可以有多项：email, name, brithday ...）。


### 安装

在 deepin Linux 或者 ubuntu 系统，都是一样的命令

```
sudo apt-get install mongodb
```

### 命令行操作，使用 Mongo Shell

启动 mongodb

```
mkdir -p data/db
mongod --dbpath=./data/db
```
这样，mongodb 就启动成功了，启动端口是 27017 。

现在要进行 Mongodb 数据库操作，我们就开启 Mongo Shell

```
mongo
```

这样，我们进入 Mongo 的命令行界面。

### 插入一条数据

可以参考：http://haoqicat.com/react-express-api/2-mongodb
可以参考：http://newming.coding.me/myidoc/html/%E6%95%B0%E6%8D%AE%E5%BA%93/mongodb.html

现在思考一下，一条数据，应该保存成一个什么单位？给出三个选项：数据库，集合，文档？

答案：一个文档。那么要保存一个文档，先要有一个数据库，再创建一个集合，然后集合中
才能插入这个文档。这个是总体思路。

具体操作步骤如下：

第一步，创建一个数据库

```
$ use digicity
switched to db digicity
```

下面的输出 `switched to db digicity` 意思是：已经切换到 digicity 这个数据库里面了。

查看数据库有没有创建成功，可以用

```
show dbs
```

暂时，没有保存数据到该数据库，所以，输出中没有 digicity 。


第二步，创建集合

创建集合，集合名称叫 users  。

```
> db.createCollection('users')
{ "ok" : 1 }
```

第三步，把一条数据，保存成一条文档（ Document ）

```
> db.users.insert({username: 'peter', email: 'peter@peter.com' })
WriteResult({ "nInserted" : 1 })
```

输出结果 `WriteResult({ "nInserted" : 1 })` 表述成功写入一条数据。

第四步，列出一个集合中的所有文档：

```
db.users.find({})
```
