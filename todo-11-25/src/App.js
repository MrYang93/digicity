import React from 'react';

import TodoList from './component/TodoList';
import TodoControl from './component/TodoControl';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      items:[
        {title:'我没完成',completed:false,id:1},
        {title:'我完成了',completed:true,id:2}
      ],
      // 0:all,1:active,2:completed
      show:0
    }
  }
  handleCompleted(id){
    // console.log(id);
    var index = this.state.items.findIndex(function (ele,i) {
      return id==ele.id
    })
    // console.log(index);
    this.state.items[index].completed = !this.state.items[index].completed;
    this.setState({items:this.state.items})
  }
  handleDel(id){
    var index = this.state.items.findIndex(function (ele,i) {
      return id==ele.id
    })
    // console.log(id);
    this.state.items.splice(index,1);
    this.setState({items:this.state.items})
  }
  handleShow(i){
    this.setState({show:i})
  }
  handleSubmit(e){
    e.preventDefault();
    let inputValue = this.refs.input.value.trim();
    this.refs.input.value=null;
    if (inputValue=='') {
      this.refs.input.focus();
      return alert('输入内容不能为空！')
    }
    let date = new Date();
    let newItem = {title:inputValue,completed:false,id:date.getTime()};
    this.state.items.push(newItem);
    this.setState({items:this.state.items})
  }
  render(){
    if (this.state.show==0) {
      var showItems=this.state.items
    }else if (this.state.show==1) {
      var showItems=this.state.items.filter(function (element) {
        return element.completed==false
      })
    }else if (this.state.show==2) {
      var showItems=this.state.items.filter(function (element) {
        return element.completed==true
      })
    }
    return(
      <div>
        <h1>TODO</h1>
        <TodoList items={showItems} handleCompleted={this.handleCompleted.bind(this)}
        handleDel={this.handleDel.bind(this)}/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder='add a todo' ref='input'/>
          <button type='submit'>ADD # {this.state.items.length+1}</button>
        </form>
        <TodoControl handleShow={this.handleShow.bind(this)}/>
      </div>
    )
  }
}

export default App;
