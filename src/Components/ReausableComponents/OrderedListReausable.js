import React from 'react'

export const OrderedListReausable = ({data}) => {
  return (
        <ol>
            {
                data?.map((v,i)=>{
                    return <li key={i}>{v}</li>
                })
            }
        </ol>
  )
}
