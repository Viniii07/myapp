import React from 'react'
import { InputReausable } from './InputReausable'

export const Registration = () => {
  return (
    <div>
        <InputReausable lbl={"Name"} type="text" name="name"/>
        <InputReausable lbl="Password" type="password" name="pwd"/>
        <InputReausable lbl={"Male"} type="radio" name="gen"/>
        <InputReausable lbl={"Female"} type="radio" name="gen"/>
    </div>
  )
}
