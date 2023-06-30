import React from 'react'

export const InputReausable = ({lbl,type,name}) => {
  return (
    <div>
      <p>
        <b>{lbl}</b>
        <input type={type} name={name} />
      </p>
    </div>
  )
}
