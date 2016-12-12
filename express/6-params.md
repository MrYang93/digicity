---
title: 前台向后台穿参数
---

本节要做的事情就是，前台在发 axios 的 http 请求的时候，我们要携带
一个参数到服务器端。这里，参数的本质就是字符串。所以这一集的本质就是
把一个任意我们想用的字符串，从前台传到后台。

比如，我们现在向把一个 "123456" 这个字符串，传递一下。

### 前台发出请求

那么前台的请求我们可以这样写

```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  handleClick(e){
    e.preventDefault();
    console.log('handleClick......');
    axios.get('http://localhost:3000/users/123456').then((response) => {
      console.log(response);
    })
  }
  render(){
    return(
      <div onClick={this.handleClick.bind(this)}>
         clickme
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
```






### 后台代码

```
const express =  require('express');
const app = express();
const cors = require('cors');
app.use(cors());


app.get('/users/:id', function(req, res){
  console.log(req.params.id)
})

app.listen(3000, function(){
  console.log('running on port 3000...');
});
```















### 后台增加请求一位用户信息的API

app.get('/users/:_id', function(req, res){
  User.findById(req.params._id,function (err,user) {
    if(err) return console.log(err);
    // console.log(user);
    res.send({user})
  })
})

这里通过 `findById` 这个方法去查找用户信息
