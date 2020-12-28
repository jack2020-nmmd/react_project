import React, {Component} from 'react';
import { connect } from "react-redux";
import {creatDemo1Action} from '../../redux/action_creators/test_action'
class Admin extends Component{
  componentDidMount(){
    console.log(this.props);
  }
  render(){
    return(
      <div>
        Admin
      </div>
    )
  }
}
//对象中的key就是store中保存该状态的key，
//对象中的value就是store中保存该状态的value
export default connect(
  state => ({peiqi:state.test}),
  {
    demo1:createDemo1Action,
    
  }
)(Admin)