import React from 'react';

import TodoList from './component/TodoList';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      items:[
        {title:'我没完成',completed:false},
        {title:'我完成了',completed:true}
      ]
    }
  }
  handleCompleted(i){
    // console.log(i);
    this.state.items[i].completed = !this.state.items[i].completed;
    this.setState({items:this.state.items})
  }
  handleDel(i){
    this.state.items.splice(i,1);
    this.setState({items:this.state.items})
  }
  handleSubmit(e){
    e.preventDefault();
    let inputValue = this.refs.input.value.trim();
    this.refs.input.value=null;
    if (inputValue=='') {
      this.refs.input.focus();
      return alert('输入内容不能为空！')
    }
    let newItem = {title:inputValue,completed:false};
    this.state.items.push(newItem);
    this.setState({items:this.state.items})
  }
  render(){
    return(
      <div>
        <h1>TODO</h1>
        <TodoList items={this.state.items} handleCompleted={this.handleCompleted.bind(this)}
        handleDel={this.handleDel.bind(this)}/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder='add a todo' ref='input'/>
          <button type='submit'>ADD # {this.state.items.length+1}</button>
        </form>
      </div>
    )
  }
}

export default App;
