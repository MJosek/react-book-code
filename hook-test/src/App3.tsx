import React, { useReducer } from "react";
import {produce} from 'immer'
interface init {
  result: number;
}
interface actionFace {
  type: string;
  num: number;
}
const nameInitialState: init = {
  result: 0,
};
const reducer = (state: init = nameInitialState, action: actionFace) => {
  switch (action.type) {
    case "+":
    return produce(state,(state)=>{
        state.result += action.num 
    })
    case "-":
    return produce(state,state=>{
        state.result -=action.num
    })
    default:
      return state;
  }
};
function App3() {
  const [res, dispath] = useReducer<init, actionFace>(
    reducer,
    nameInitialState
  );
  return (
    <>
      {res.result}
      <button onClick={() => dispath({ type: "+", num: 10 })}>+</button>
      <button onClick={() => dispath({ type: "-", num: 10 })}>-</button>
    </>
  );
}

export default App3;
