import React from 'react'

export const UnorderedList = () => {
    const data=["red","pink","blue","yellow","green"]
  return (
    <div>
      <ul>
        {data.map((clr,i)=>{
            return<li key={i}>{clr}</li>
        })}
      </ul>
    </div>
  )
}
