import React, { createRef, useRef, useState } from 'react'

export const Parent2 = () => {
  return (
  <div>
    <h1>Parent::</h1>
    <Child2/>
  </div>
 );
};

const Child2=()=>{
     const inputRef=useRef(null)
     const handleClick=()=>{
       let inputData=inputRef.current.value;
       alert(inputData)
     }    
     return (
    <div>
        <h1>Child</h1>
        <input ref={inputRef} />
        <button onClick={handleClick}>Click me</button>
    </div>
 );
};
