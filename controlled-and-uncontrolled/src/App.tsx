import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
    console.log(event.target.value);
    
  }
  return <input type="text" defaultValue={'guan'} onChange={handleChange}/>;
}

export default App;
