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


### 首页变成链接

代码：[link to post/id](https://github.com/happypeter/sleep-write/commit/214e3ecf38d9d7793115bd4add4529bdb2041648)
