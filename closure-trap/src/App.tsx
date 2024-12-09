import React, { useState, useEffect,useReducer } from "react";
interface nameInitFace {
  result:number
}
interface actionFace {
  type:'+'
  num:number
}
const nameInitialState = {result:0}
const reducer = (state:nameInitFace = nameInitialState, action:actionFace) => {
  switch (action.type) {
    case '+':
      return {
        result:state.result + action.num
      }
  }
}
function App() {
  // const [count, setCount] = useState(0);
  const [res,dispatch] = useReducer(reducer,nameInitialState)
  useEffect(() => {
    setInterval(() => {
      // setCount(count =>count + 1);
      dispatch({type:"+",num:1})
    }, 2000);
  }, []);
  return <div className="App">{res.result}</div>;
}

export default App;
