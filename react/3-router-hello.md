---
title: Hello World
---



### 代码

server.js

```js
var express = require('express');
var app = express();

app.use(express.static('public'));
// 用跟 本文件平级的一个 public 夹作为静态文件的存放位置
// 没有这一行，后面 sendFile 的 index.html 就找不到了。

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.listen(3000, function(err) {
  console.log('Listening at http://localhost:3000');
});
```

src/index.js

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import {Link} from 'react-router';

class App extends Component {
  render(){
    return(
      <div>
        <Link to='/hello1'>Hello1</Link>
        <Link to='/hello2'>Hello2</Link>
      </div>
    )
  }
}

class Hello1 extends Component {
  render(){
    return(
      <h1>
        Hello1 Page
      </h1>
    )
  }
}

class Hello2 extends Component {
  render(){
    return(
      <h1>
        Hello2 Page
      </h1>
    )
  }
}



const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/hello1' component={Hello1} />
    <Route path='/hello2' component={Hello2} />
  </Router>
);



ReactDOM.render(renderRoutes(), document.getElementById('app'));
```

.babelrc


```json
{
  "presets": ["es2015", "react", "stage-0"]
}
```

webpack.config.js

```js
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
```

package.json

```json
{
  "name": "react-with-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.10.4",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.9.0",
    "babel-preset-react": "^6.11.1",
    "babel-preset-stage-0": "^6.5.0",
    "express": "^4.14.0",
    "webpack": "^1.13.1"
  },
  "dependencies": {
    "react": "^15.2.1",
    "react-dom": "^15.2.1",
    "react-router": "^3.0.0"
  }
}
```

public/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Router</title>
</head>
<body>

  <div id="app"></div>
  <script src="bundle.js" charset="utf-8"></script>
</body>
</html>
```

启动

```
node server.js
```

就可以看到 react-router 可以正常运行了。
