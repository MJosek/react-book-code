//父组件调用子组件的方法
import React, { useRef, useEffect, useImperativeHandle } from "react";
interface RefProps {
  aaa: () => void;
}
const Gung: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref,() => {
    return {
      aaa() {
        inputRef.current?.focus();
      },
    };
  },[inputRef]);
  return (
    <>
      <input ref={inputRef}></input>
    </>
  );
};
const ForWardGung = React.forwardRef(Gung);
function App4() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.aaa();
  });
  return (
    <>
      <ForWardGung ref={inputRef} />
    </>
  );
}
export default App4;
