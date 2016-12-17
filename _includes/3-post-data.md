---
title: 用 POST 发复杂数据到服务器（ form 篇 ）
---

浏览器中发 POST 请求，地址栏是无法做到的，通常有两种方式可以：一种就是用 html 的
form ，另外一种是 HTTP 客户端，例如 axios/fetch 。今天我们先介绍 form 的这种
形式。



### 内容类型

代码跑起来，填写表单（用户名 happypeter ），点 submit 按钮，发出一个 POST 请求，可以在 chrome 开发者工具的 Network
标签下看到，请求的头部（ Headers ） 中包含

```
Content-Type:application/x-www-form-urlencoded
```

表示发送的数据，的内容类型是 `application/x-www-form-urlencoded` 。

### 请求的主体

同样，在 chrome 的 Network 标签下，也可以看到，请求主体

```
username=happypeter
```




### 代码
