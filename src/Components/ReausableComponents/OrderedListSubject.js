import React from 'react'

export const OrderedListSubject = () => {
    const subjects=["React","Angular","Vuejs"]
  return (
    <div>
        <ol>
           {subjects.map((subject,i)=>{
            return <li key={i}>{subject}</li>
           })}
        </ol>
    </div>
  )
}
