import React from 'react'
import"./box.css"

function Box(props) {

  return (
     <div className='popup-Main'>
<div className='popup-Box'>
<button className='button_popup' onClick={props.handleClose}>x</button>
{props.content}
</div>
  </div>
  )
}

export default Box