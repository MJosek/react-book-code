import React, { useState, useEffect } from "react";

function App2() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log('effect');
    const timer = setInterval(()=>{
        console.log(num);
    },1000)
    
  }, [num]);
  return (
    <div className="App">
      <div onClick={() => setCount((prevCount) => prevCount + 1)}>{count}</div>
    </div>
  );
}

export default App2;
