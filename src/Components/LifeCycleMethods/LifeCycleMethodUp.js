import React, { useEffect, useState } from 'react';

export const LifeCycleMethodUp = () => {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    alert("componentDidUpdate")
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((d)=> console.log(d,"data"))
    .catch((res)=>{
        console.log(res)})
  })
  useEffect(()=>{
    alert("componentDidMount")
  },[])
  return (
    <div>
      <button onClick={()=>setCount(count +1)}>Inc Count{count}</button>
    </div>
  )
}