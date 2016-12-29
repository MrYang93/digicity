---
title: connect 动态读取 store 数据
---

首先明确一点，就是 redux 可以配合多种框架使用，并不是 react 的一部分。所以天然的 react 组件和 redux store 之间是没有任何关系的。这一节，我们就把他们二者 `connect` 起来。

连接二者，需要一个专门的库，叫做 [react-redux](https://github.com/reactjs/react-redux)，这个是 React 官方的 Redux
对 React 的绑定。

### 安装使用

```
npm i --save react-redux
```

具体的使用的主要涉及两个接口 Provider 和 connect 。



```
export default connect(mapStateToProps)(PostBody);
```

- connect 连接 store 和组件
- mapStateToProps：把 store 中的数据（一部分）映射为当前组件的 props
  - map 的意思是“映射”
  - State 指的是 store 状态树（ State Tree ），也就是 store 的实际数据
  - Porps 就是属性


Store 中数据很多，当前组件需要的只是一部分，那么选取工作是在 mapStateToProps 中完成的

```
const mapStateToProps = (state) => ({
  comments: state
});
```

上面的 `(state)` 指的就是 Store 中的全部状态，也即是 store.getState() 可以读到的内容。具体的选取工作是用 `comments: state` 这样的语句的完成的。

connect 完毕之后，PostBody 之中就多了一个属性：`this.props.comments`

只有 connect 不能工作，因为 connect 的生效范围是由 `<Provider>` 组件决定的，所以
代码中还需要添加

```
<Provider store={store}>
  <div>
    <div className="top  clearfix">
      <PostBody />
    </div>
    <div className="bottom clearfix">
      <CommentBox />
    </div>
  </div>
</Provider>
```

这样，动态连接就建立了。

### 代码

代码: **dynamic data by react-redux**


```diff

diff --git a/src/components/CommentBox.js b/src/components/CommentBox.js
index 65e4049..7c04bc2 100644
--- a/src/components/CommentBox.js
+++ b/src/components/CommentBox.js
@@ -2,10 +2,10 @@ import React, { Component } from 'react';
 import store from '../store';

 class CommentBox extends Component {
-  constructor(){
-    super();
+  constructor(props){
+    super(props);
     this.state = {
-      comments: store.getState().comments
+      comments: store.getState().comments[this.props.postId]
     }
   }
   handleSubmit(e){
@@ -14,7 +14,7 @@ class CommentBox extends Component {
     store.dispatch({type: 'ADD_COMMENT', comment: this.refs.comment.value});
     console.log(store.getState());
     this.refs.commentForm.reset();
     -    this.setState({comments: store.getState().comments});
     +    this.setState({comments:store.getState().comments[this.props.postId]});
        }
        render(){
          let commentList = this.state.comments.map((comment, i)=>{
     diff --git a/src/components/Post.js b/src/components/Post.js
     index a9cdb4a..2fe4adb 100644
     --- a/src/components/Post.js
     +++ b/src/components/Post.js
     @@ -10,10 +10,10 @@ class Post extends Component {
            <Provider store={store}>
              <div>
                <div className="top  clearfix">
                -            <PostBody id={ this.props.params.postId } />
                +            <PostBody postId={ this.props.params.postId } />
                           </div>
                           <div className="bottom clearfix">
                -            <CommentBox />
                +            <CommentBox postId={this.props.params.postId} />
                           </div>
                         </div>
                       </Provider>
                diff --git a/src/components/PostBody.js b/src/components/PostBody.js
                index 9710156..c097d18 100644
                --- a/src/components/PostBody.js
                +++ b/src/components/PostBody.js
                @@ -7,8 +7,7 @@ class PostBody extends Component {
                     return(
                       <div className="post-body">
                         <div className="comment-num">
                -           { this.props.comments.length }---
                -           { this.props.id }
                +          { this.props.comments[this.props.postId].length }
                         </div>
                       </div>
                     )
                diff --git a/src/store.js b/src/store.js
                index 1a72241..6113203 100644
                --- a/src/store.js
                +++ b/src/store.js
                @@ -2,10 +2,10 @@ import { createStore } from 'redux';
                 import rootReducer from './reducers';


                -let comments = [
                -  "hello1",
                -  "hello2"
                -]
                +let comments = {
                +  1: ['nice course', 'help me a lot'],
                +  2: ['really good', 'save me lots of time']
                +}
                const posts = [
                   {
```
