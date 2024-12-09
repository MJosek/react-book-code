import React, { createContext,useContext } from "react";
const countState = createContext(111)
function App5() {
  return (
    <countState.Provider value={1122}>
      <Bbb />
    </countState.Provider>
  );
}
const Bbb = ()=>{
    return <Bcc />
}
const Bcc = ()=>{
    const count = useContext(countState)
    return (
        <>
        count:{count}
        </>
    )
}
export default App5;
