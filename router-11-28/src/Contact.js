import React from 'react';
import axios from 'axios';

class Contact extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/newming')
      .then( res => this.setState({data:res.data,wait:false}) )
  }
  render(){
    console.log(this.state.data);
    return(
      <div>
        <h1 className="text-center">我的github信息</h1>
        {this.state.wait ? '请稍等' :
          <div>
            <p>{this.state.data.id}</p>
            <img src={this.state.data.avatar_url}/>
          </div>
        }
      </div>
    )
  }
}

export default Contact;
