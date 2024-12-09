import React, { useState, useEffect } from "react";

function App21() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log('effect');
    const timer = setInterval(()=>{
        console.log(num);
    },1000)
    return(()=>{
      console.log("xxx");
      
      clearInterval(timer)
    })
  }, [num]);
  return (
    <div className="App">
      <div onClick={()=>setNum(num + 1)}>{num}</div>
    </div>
  );
}

export default App21;
