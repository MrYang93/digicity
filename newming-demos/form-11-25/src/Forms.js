import React from 'react';

class Forms extends React.Component{
  constructor(){
    super();
    this.state={value:''}
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.value);
  }
  handleChange(e){
    this.setState({value:e.target.value})
  }
  handleRadio(e){
    console.log(e.target.value);
  }
  handleCheckbox(e){
    console.log(e.target.value);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name="aaa" value={this.state.value} onChange={this.handleChange.bind(this)}/><br />
          {/* <textarea value={this.state.value} onChange={this.handleChange.bind(this)}/> */}
          A
          <input onChange={this.handleCheckbox.bind(this)}  name="goodCheckbox" type="checkbox" value="A"/>
          B
          <input onChange={this.handleCheckbox.bind(this)} name="goodCheckbox" type="checkbox" defaultChecked value="B" />
          C
          <input onChange={this.handleCheckbox.bind(this)} name="goodCheckbox" type="checkbox" value="C" />
          <button type='submit'>提交</button>
        </form>
      </div>
    )
  }
}

export default Forms;
