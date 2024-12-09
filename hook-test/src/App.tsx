import React,{useState} from 'react';

function App() {
  // const [count,setCount] = useState()
  const [count,setCount] = useState(()=>{
    const num1 = 1 + 2;
    const num2 = 2 + 3;
    return num1 + num2;
  })
  return (
    <div className="App">
      {/* <div onClick={()=>setCount(count + 1)}>{count}</div> */}
      <div onClick={()=>setCount((prevCount)=>prevCount+1)}>{count}</div>
    </div>
  );
}

export default App;
