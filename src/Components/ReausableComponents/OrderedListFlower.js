import React from 'react'

export const OrderedListFlower = () => {
    const flowers=["Rose","Lily","Jasmin"]
  return (
    <div>
        <ol>
           {flowers.map((flower,i)=>{
            return <li key={i}>{flower}</li>
           })}
        </ol>
    </div>
  )
}
