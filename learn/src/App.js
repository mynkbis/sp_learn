
import './App.css';
import Button from './Button/button';


const pop=()=>{
  alert("you clicked me ")
}

function App() {
  return (
    <div className="App">

<div onClick={pop}>{Button("Submit","150px","50px","Black","green")}</div>
<div>{Button("Press-me","150px","50px","Black","green")}</div>
    </div>
  );
}

export default App;
 
