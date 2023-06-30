import React, { useState } from 'react'

export const PassingData2 = () => {
  const [data, setData] = useState("Vinita");
const handleClick = () => {
  setData("Gauri");
};    
  return (
    <div>
        <button onClick={handleClick}>Pass Data</button>
        <Example  myData={data} />
    </div>
  )
};

const Example = ({myData}) => {
    return <div>Get Data:::{myData}</div>
};
