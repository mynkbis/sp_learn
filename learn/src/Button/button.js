import React from 'react'
import "./button.css"

const Button=(ButtonName,
  ButtonWidth,
  ButtonHeight,
  ButtonColor,
  ButtonShadow )=> {

  return (
    <>
<button style={{width:ButtonWidth, 
height:ButtonHeight,
color:ButtonColor,
filter: `drop-shadow(2px 4px 6px ${ButtonShadow})`
}} 

className="AppButton">

{ButtonName}</button>

</>

 )
}

export default Button 