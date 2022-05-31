import React from 'react'

function ContentSingle({id, description, image, title}) {
  return (
  <div className='contentSingleBox'>
  <img src={image} alt="Unavailable" width="120px" />
    <div>Id:{id}</div>
    <div>title:{title}</div>
    <div>Description:{description}</div>
  </div>
    )
}

export default ContentSingle;


// {id, description, image, title}