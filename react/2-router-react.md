---
title: 基本 React 项目搭建
---


### 新建　React 项目

先来创建一个最简单的　React 的　Hello World 项目：

文件夹的名叫　router-hello/

src/index.js

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render(){
    return(
      <div>
        Hello
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```

.babelrc

```
{
  "presets": ["es2015", "react", "stage-0"]
}
```

package.json

```json
{
  "name": "react-with-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": " ./node_modules/.bin/webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.10.4",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.9.0",
    "babel-preset-react": "^6.11.1",
    "babel-preset-stage-0": "^6.5.0",
    "react": "^15.2.1",
    "react-dom": "^15.2.1",
    "webpack": "^1.13.1"
  },
  "dependencies": {
    "react-router": "^3.0.0"
  }
}
```

webpack.config.js

```js
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
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

index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

  <div id="app"></div>
  <script src="./build/bundle.js" charset="utf-8"></script>
</body>
</html>
```

有了上面的代码，浏览器中打开　index.html ，可以看到　hello 字样。


### 安装


```
npm i --save react-router
```






### 补充知识： NPM script

有些命令比较长，我们想给它起一个简单的外号（别名），便于手敲。设置的位置
就是在　package.json 文件的　script （脚本）这一部分。所以这个知识点
叫做　NPM Script 。


比如我们有这样一个命令：

```
webpack --config webpack.config.dev.js
```

这个命令太长，现在我们可以把它写到　package.json 之中

```
"scripts": {
  "build": "webpack --config webpack.config.dev.js"
},
```

这样，每次我想执行上面这个命令的时候，只需要

```
cd project
npm run build
```

注意，上面的 run 是必须要加的。但是如果有下面的代码

"scripts": {
  "start": "node devServer.js"
},

由于 start 是特殊名字，执行命令，我们可以用

```
npm run start
```

但是页可以省略 run 。
