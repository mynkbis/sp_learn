import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ContentSingle from '../ContentSingle/ContentSingle';
import Search  from '../Search/Search';



function SearchModelbox() {
   
  return (
    <div style={{display:"flex" , margin:"15px"}}>
    <input placeholder='Search here...' ></input>  
    <button>Search</button>
    <div>
       
    </div>
    </div>
  )
  
}




export default SearchModelbox;