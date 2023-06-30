import React, { Component } from 'react'

export default class LifeCycleMethodUpdating extends Component {
    //Mounting
    constructor(){
        super();
        console.log("constructor")
        this.state={
            count:0
        }
    }
    //Mounting and Updating
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps")
    }
    //updating
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true;
    }
    //Mounting and Updating
  render() {
    console.log("render")
    return (
      <div>
        <button onClick={()=>this.setState({count:this.state.count+1})}>
            Inc Count{this.state.count}
        </button>
      </div>
    )
  }
  //updating
  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate")
  }
  //updating
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
    //Mounting
  componentDidMount(){
    console.log("componentDidMount")
  }
}
