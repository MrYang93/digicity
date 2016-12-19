---
title: 实现 RESTful API
---

RESTful API 就是约定俗称的一套东西。

### 第一个 API ：拿到所有文章标题

要求做到的是：

前台发 curl 请求，请求格式为

```
curl -X GET localhost:3000/posts
```

发出的请求为：

```
GET /users
```

后台 API 响应，返回所有文章的 title 给前台。

代码：[show all posts](https://github.com/happypeter/sleep-write/commit/018df2901327a47f2674e6f33b8aa28567e4b0ed)
