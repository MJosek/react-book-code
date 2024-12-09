import React, { useState, useEffect,useRef } from "react";
import useInterVal from './hooks/useInterVal.tsx'
export default function App2() {
  const [count, setCount] = useState(0);
  const updateCount = ()=>{
    setCount(count + 1)
  }
  useInterVal(updateCount,1000)
  return <div>{count}</div>;
}
