
import './App.css';
import Button from './Button/button';


function App() {
  return (
    <div className="App">

<div onClick={()=>{ alert("You clicked submit")}}>{Button("Submit","150px","50px","Black","green")}</div>
<div onClick={()=>{alert("You hit a Button")}}>{Button("Press-me","150px","50px","Black","green")}</div>
<div onClick={()=>{alert("A got your notification")}}>{Button("Hire me","150px","50px","Black","green")}</div>
    </div>
  );
}

export default App;
 
