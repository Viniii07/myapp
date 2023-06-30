import React from 'react'

export const OrderedList = () => {
    let data = ["Swati","Vidya","Dipti","Vinita","Gauri","Nira","Asmita"];
  return (
    <div>
        <ol>
            {data.map((v,i) => {
                return <li Key={i}>{v}</li>
            })}            
        </ol>
    </div>
  )
}
