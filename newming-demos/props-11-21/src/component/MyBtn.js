import React,{Component,PropTypes} from 'react';

class MyBtn extends Component{
  render(){
    let styles={
      backgroundColor:this.props.bg,
      padding:'10px 15px',
      borderRadius:'5px',
      border:'none',
      color:'#fff',
      fontSize:'22px'
    }
    return(
      <button style={styles}>{this.props.title}</button>
    )
  }
}
MyBtn.defaultProps = {
  title: '我是默认的标题',
  bg:'#000'
};
MyBtn.propTypes = {
  title: PropTypes.string,
  bg: PropTypes.string
};
export default MyBtn;
