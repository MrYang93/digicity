---
title: 保存数据到 MongoDB
---

发出 curl 请求

```
curl -H 'application/json' -X POST -d '{"title":"Hello", "content": "hello content"}' localhost:3000/posts
```

我们可以把上面的额 json 数据，保存到 mongodb 数据库之中。
