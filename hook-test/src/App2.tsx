import React, { useState, useEffect } from "react";

const queryData = () => {
  const data = new Promise((resolved) => {
    setTimeout(() => {
      resolved(888);
    }, 2000);
  });
  return data;
};
function App2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("xxx");
    queryData().then((data) => {
      setCount(data);
    });
  }, []);
  return (
    <div className="App">
      <div onClick={() => setCount((prevCount) => prevCount + 1)}>{count}</div>
    </div>
  );
}

export default App2;
