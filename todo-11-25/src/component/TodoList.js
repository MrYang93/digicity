import React from 'react';

class TodoList extends React.Component{
  handleChange(i){
    // alert(i)
    this.props.handleCompleted(i);
  }
  handleDelete(i){
    this.props.handleDel(i)
  }
  render(){
    let list = this.props.items.map( (item,index) =>
      <div key={Math.random()}>
        <input type='radio' checked={item.completed} onChange={this.handleChange.bind(this,index)}/>
        <span style={item.completed ? {textDecoration: 'line-through',opacity:'0.6'} : null}>{item.title}</span>
        <button onClick={this.handleDelete.bind(this,index)}>删除</button>
      </div>
    )
    return(
      <div>
        {list}
      </div>
    )
  }
}

TodoList.propTypes = {
  items: React.PropTypes.array
};

export default TodoList;
