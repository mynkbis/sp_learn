import { useState } from 'react';
import './App.css';
import ButtonBox from './Compnents/Button/button';
import Box from './Compnents/Model/box';
import Search from './Compnents/Search box/Search';


function App() {


  const [isOpen, setIsOpen]=useState(false)
  const toggleBox=()=>{
    setIsOpen(!isOpen)
  };

  return (
    <div className="App">
      <Search/>
   {/* <ButtonBox toggleBox={toggleBox} buttonName={"Hello Sir"}></ButtonBox> 
  
  {isOpen && 
  <Box handleClose={toggleBox}
  content={"Thank you !! for subscribing"}></Box>}   */}
  {/* pop up box will be open when button is clicked */}
   </div>

);
}

export default App;
 
