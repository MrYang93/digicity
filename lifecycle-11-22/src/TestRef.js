import React from 'react';

import Add from './Add';

class TestRef extends React.Component{
  handleClick(){
    this.refs.add.handleClick();
  }
  render(){
    return(
      <div>
        <Add>
          我是1
        </Add>
        <Add>
          <p>hello</p>
        </Add>
        {/* <button onClick={this.handleClick.bind(this)}>父组件加一</button> */}
      </div>
    )
  }
}

export default TestRef;
