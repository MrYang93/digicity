import React from 'react';

class Footer extends React.Component{
  render(){
    let styles={
      fontSize:'32px',
      textAlign:'center',
      margin:'20px 0'
    }
    return(
      <div style={styles}>
        欢迎光临,我是Footer
      </div>
    )
  }
}

export default Footer;
