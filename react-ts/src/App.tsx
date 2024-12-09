import React from 'react';
interface AaaProps {
  name:string
  context:React.ReactElement
}
function App() {
  return (
    <div className="App">
      <Aaa name="gu" context={<button>xxxx</button>}/>
    </div>
  );
}
const Aaa:React.FunctionComponent<AaaProps> = (props)=>{
  return <div>{props.name}{props.context}</div>
}
export default App;
