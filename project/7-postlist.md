---
title: 实现首页文章列表
---

今天把前后台都启动起来，联调一下，显示出文章列表。

### 启动流程

先启动前台：

第一步编译 bundle.js ，运行

```
npm run build
```

编译完成，启动前台服务器

```
npm start
```

再来启动后台：

先启动数据库：

```
mongod --dbpath=./data/db
```

然后启动后台服务：

```
npm start
```

步骤开始变多，实际项目中，是通过**bash 脚本**来一键执行。

写 Bash 脚本的推荐资料：http://billie66.github.io/TLCL/ 。


### 任务一： 首页变成链接

代码：[link to post/id](https://github.com/happypeter/sleep-write/commit/214e3ecf38d9d7793115bd4add4529bdb2041648)

### 任务二：创建空白的 posts/xxx 页面

要完成的任务就是首页的链接可以打开，打开后不要求有具体内容，显示 Hello 就行。
主要考察 React-router 传参数这个知识点。


react-router 传参数，就是从前台的一个页面，传递给下一个页面，跟后台没有发生关系。

如何发起传参：

```
<Link to={/posts/23456}> My Dog</Link>
```

我们写下这条语句，我们期待用户点击这个 Link ，我们的目的有两个：

- 跳转到 /posts/23456 这个页面
- 要能够在 /posts/23456 这一个页面中，使用 '23456' 这个字符串

接受路由的语句怎么写

```
<Route path={/posts/:id} component={ Post }
```

下一步，就是如何在新”页面“中得到 `23456` 这个字符串，那么在 Post.js
中，语句如下：

```
this.props.params.id
```

这样得到的就是 `23456` 这个 id 值了，方便进一步的使用。
