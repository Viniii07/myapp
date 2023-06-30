import React, { Component } from 'react'

export default class AjaxLifeCycleMethod extends Component {
    constructor(){
        super()
    }
    static getDerivedStateFromProps(){}
  render() {
      return (
      <div>Ajax</div>
    )
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>console.log(data)).catch((res)=>{
        console.log(res)})
  }
}
