import { Component } from "react";

export const myHOC=(MyComponent)=>{
    class Logic extends Component{
        constructor(){
            super()
            this.state={
                count:0
            }
        }
        handleInc=()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        render(){
            return <MyComponent count={this.state.count} fn={this.handleInc}/>;
        }
    }
    return Logic;
}