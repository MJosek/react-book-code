import React, { useRef,useEffect } from "react";
function App4() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    inputRef.current?.focus()
  })
  return (
    <>
      <input ref={inputRef}></input>
    </>
  );
}
export default App4;
