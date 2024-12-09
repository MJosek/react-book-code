import React, { useEffect, useState, memo, useMemo, useCallback } from "react";
function App6() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount(4);
    }, 2000);
  }, []);
  const memoCount = useMemo(() => {
    return count;
  }, [count]);
  const callBackFun = useCallback(() => {
    console.log("yyy");
  }, []);
  return <MenoBbb count={memoCount} callBackFun={callBackFun}></MenoBbb>;
}
const Bbb = (props) => {
  console.log("xxx");
  return (
    <>
      <button onClick={props.callBackFun}>click</button>
      <div>count:{props.count}</div>
    </>
  );
};
const MenoBbb = memo(Bbb);
export default App6;
