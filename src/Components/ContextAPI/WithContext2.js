import React, { useContext } from 'react';
import {ctx, myClrCtx} from "./ctx";

export const WithContext2 = () => {
    const data={
        name:"Sachin",
        loc:"mumbai"
    };
    const myColor=["red", "blue", "pink"];
  return (
    <div>
     <ctx.Provider value={data}>
       <myClrCtx.Provider value={myColor}>
        <A />
       </myClrCtx.Provider>
     </ctx.Provider>
    </div>
  )
};

const A=()=>{
    const myData=useContext(ctx);
    const myColor=useContext(myClrCtx)
    return <div>
        I'm A::{myData.name}...{myData.loc}
        myColor::{myColor[0]}...{myColor[1]}
        <B />
        <C />
    </div>;
};

const B=()=>{
    const myData=useContext(ctx);
    const myColor=useContext(myClrCtx)
    return <div>
         I'm B::{myData.name}...{myData.loc}
         myColor::{myColor[1]}
    </div>;
};

const C=()=>{
    const myData=useContext(ctx);
    const myColor=useContext(myClrCtx)
    return <div>
        I'm C::{myData.name}...{myData.loc}
        myColor::{myColor[2]}
    </div>;
};
