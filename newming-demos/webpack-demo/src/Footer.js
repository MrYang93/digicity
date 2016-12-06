import React from 'react';

class Footer extends React.Component{
  render(){
    let color = '#058';
    let fontSize = '28px';
    let obg = {color,fontSize,backgroundColor:'#000'};

    return (
      <div className='footer'
      style={obg}>
        我是Footer组件
      </div>
    )
  }
}

export default Footer;
