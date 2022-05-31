import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ContentSingle from '../ContentSingle/ContentSingle';



function Search() {
    const [searchText, setSearchText]=useState("");
    const [content, setContent]=useState([]);
    const [totalPages, setTotalPages]=useState("");
   console.log(searchText)



   const FetchSearch= async ()=>{
  //  const {data}= await axios.get(`https://fake-movie-database-api.herokuapp.com/api?s=${searchText}`
   
  const {data}=await axios.get(`https://imdb-api.com/en/API/SearchSeries/k_pe8181u5/${searchText}`
   );
  console.log(data)
  setContent(data.results);
  };
  useEffect(()=>{
    FetchSearch()

  },[])
     return (
    <div style={{display:"flex" , margin:"15px"}}>
    <input placeholder='Search here...' onChange={(e)=>setSearchText(e.target.value)}></input>  
    <button onClick={FetchSearch}>Search</button>
    <div>

    {content && content.map((e)=><ContentSingle key={e.id} id={e.id } description={e.description} title={e.title} image={e.image}/>)}
      </div>
    </div>
  )
  
}




export default Search