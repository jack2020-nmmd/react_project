import React, {Component} from "react"
import { createIncrementAction,createDecrementAction } from "./redux/reducer_actions";


export default class App extends Component{
//加法
  increment = () =>{
    const {value} = this.refs.selectNumber
    this.props.store.dispatch(function name(value) {
      return {type:"Increment",data:value}
    }(value*1))
  }
  
  //减法
  decrement = () =>{
    const {value} = this.refs.selectNumber
    this.props.store.dispatch(createDecrementAction(value*1))
  }

  //偶数添加
  incrementIfOdd = () =>{
    let {value} = this.refs.selectNumber
    let count = this.props.store.getState()
    if(count%2 === 1){
      this.props.store.dispatch(createIncrementAction(value*1))
    }
  }
//异步相加
  incrementAsync = () =>{
    let {value} = this.refs.selectNumber
    setTimeout(()=>{
      this.props.store.dispatch(createIncrementAction(value*1))
   },1000)
  }

  render(){
    let count = this.props.store.getState()
    console.log(count);
    return(
      <div>
        <h3>当前计数为：{count}</h3>
        <select ref="selectNumber">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>&nbsp;
      </div>
    )
  }
}