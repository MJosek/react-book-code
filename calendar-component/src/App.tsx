import React from "react";
import Calendar from "./Calendar/index.tsx";
import dayjs from "dayjs";
function App() {
  return (
    <div className="App">
      <Calendar value={dayjs("2024-12-16")} className={'aaa'} style={{}} locale={'en'}></Calendar>
    </div>
  );
}

export default App;
