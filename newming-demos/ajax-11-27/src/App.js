import React from 'react';
import axios from 'axios';
import superagent from 'superagent';
// fetch

import GitShow from './GitShow';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let value = this.refs.input.value;
    axios.get(`https://api.github.com/users/${value}`)
      .then( response => this.setState({data:response.data,wait:false}) )
      .catch( error => alert(error) )
  }
  componentDidMount(){
    superagent
     .get('http://api.duopingshidai.com/api/posts')
     .end(function(err, res){
       if (err) return console.log(err);
       if (res) {
         console.log(res);
       }
     });
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder='search git' ref='input'/>
        </form>
        {this.state.wait?'loading....':<GitShow gitinfo={this.state.data}/>}
      </div>
    )
  }
}

export default App;
