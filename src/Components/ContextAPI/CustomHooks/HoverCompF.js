import React, { useState } from 'react'
import { useCount } from './useCount'

export const HoverCompF = () => {
     const [c,d]=useCount(100);
  return (
    <div>
        <h1 onMouseOver={d}>Hover me{c}</h1>
    </div>
  )
}
