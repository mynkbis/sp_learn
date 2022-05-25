import React from 'react'
import "./button.css"



const ButtonBox=(props)=>{

return(
  <>

<button className='appButton' onClick={props.toggleBox}>{props.buttonName}</button>

  {/* <div className='popup-Main'>
<div className='popup-Box'>
<button className='button_popup' onClick={props.handleClose}>x</button>
{props.content}
</div>
  </div> */}

  </>
)

}

export default ButtonBox 