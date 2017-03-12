---
title: cookie
---


```js
var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())
app.use(express.static('public'));


app.get('/', function(req, res){
  console.log('api running')
  res.setHeader('Set-Cookie', 'id=123')
  res.sendFile('index.html')
})

app.get('/hello', function(req, res){
  console.log(req.cookies)
})

app.listen(3000, function(){
  console.log('running on port 3000...')
})
```

public/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>index</title>
</head>
<body>
  <a href="/hello">hello</a>
</body>
</html>
```


```
$ curl -v --cookie "peter=billie" localhost:3000/hello
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 3000 (#0)
> GET /hello HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.51.0
> Accept: */*
> Cookie: peter=billie
>
```

后台可以看到

```
{ peter: 'billie' }
```
