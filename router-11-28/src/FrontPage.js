import React from 'react';

class About extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <div className="container">
          <h1>Hello, world!</h1>
          <p>这是我的首页，欢迎光临</p>
          <p><a className="btn btn-primary btn-lg" role="button">Learn more</a></p>
        </div>
      </div>
    )
  }
}

export default About;
