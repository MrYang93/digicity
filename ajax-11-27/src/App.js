import React from 'react';
import $ from 'jquery';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    var _this = this;
    // 1.原生
    var request = new XMLHttpRequest();
    //监听state变化
    request.onreadystatechange=function(){
      if (request.readyState==4 && request.status==200){
        var dataObg = JSON.parse(request.responseText);
        console.log(dataObg);
        _this.setState({
          data:dataObg,
          wait:false
        })
      }
    }
    request.open("GET","https://api.github.com/users/newming",true);
    request.send();

  }
  render(){

    return(
      <div>
        {this.state.wait ? '正在加载数据' :
          <div>
            <img src={this.state.data.avatar_url}/>
            <p>微信号：{this.state.data.bio}</p>
          </div>}
      </div>
    )
  }
}

export default App;
