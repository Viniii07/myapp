import React from 'react';
import {Child} from "./Child";

export const PassingData = () => {
  const data = "Vinita";
  return (
    <div>
      <h1>Parent</h1>
      <Child myData={data} />
    </div>
  );
};


  