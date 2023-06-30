import React, { useEffect, useState } from 'react';

export const LifeCycleMethodF = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>setData(data)).catch((res)=>{
        console.log(res)})
  },[])
  return (
    <div>
      {data?.map((obj,i)=>{
        return <h1 key={i}>{obj.title}</h1>
      })}
    </div>
  )
}

//useEffect(()=>{},[])//componentDidMount//mounting
//useEffect(()=>{})//componentDidUpdate//updating
//useEffect(()=>{return ()=>{}},[])//componentWillUnmount//unmounting