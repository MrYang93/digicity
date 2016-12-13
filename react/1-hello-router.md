---
title: 你好，React-router
---

官网：https://github.com/ReactTraining/react-router


### 单页面应用　SPA

一般传统网站都有多个 html 页面，例如　about.html ，index.html 。
所以如果我有　example.com/about.html 或者　example.com/about
那么就可以直接打开　about.html 页面。所以这种条件下就不会涉及到
**前端路由** 的概念。

但是，我们用 React 来创作的网站，是一个**单页面应用** ，也就是整个网站
只有一个　index.html 页面。所以传统的处理链接的方式，就不灵了。但是，为什么单页面应用看上去也是有多个页面的呢？这个是因为，如果链接不同，例如
用户访问　spa-example.com/about 那么就会执行　About 组件的　JS 代码。如果访问　spa-example.com/index 就会执行对应的组件的代码。所以，单页面应用，表面上看上去不同的链接对应不同的页面，实际上底层就是不同链接，会
对应触发底层不同部分的　JS 代码。所以说，单页面应用的一个所谓的页面，其实是一个代码入口点（　Entry Point )，也就是如果一个　SPA 应用有18个页面，就是有18个入口点。

那么，React-router 就是一个前端路由器，它的作用就是，给定一个链接格式，
它会帮我们制定哪一段代码要被执行。

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


### NPM script

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


### Webpack 基本使用

参考：http://haoqicat.com/webpack-react-mole
