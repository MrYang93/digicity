---
title: 用 POST 传复杂数据到服务器（ axios 篇）
---

在 React 应用中，比较少会用到 form 直接提交数据的形式，而更多是采用更为灵活的一种方式，
那就通过 axios/fetch 这样的 http 客户端来发 POST 请求。

跟 from 提交形式不同，axios 提交的内容类型是

```
Content-Type: application/json
```

### 我们先来实现后台代码

基本上就是在上节的基础上，修改一行代码即可

```diff
--- app.use(bodyParser.urlencoded());
+++ app.use(bodyParser.json());
```

.json 接口，可以到 [body-parser](https://github.com/expressjs/body-parser) 的 Readme 中查到。

### 使用 curl 调试 api

```
curl -H "Content-Type: application/json" -X POST -d '{"username":"happypeter"}' http://localhost:3000/login
```

上面代码中，`-H` 用来设置头部（ header ），这里我们设置的值是 `Content-Type: application/json` 。`-X` 用来设置请求方法，这里设置的值是 `POST` 。`-d` 用来设置数据，
具体的值就是后面的 json 字符串。
