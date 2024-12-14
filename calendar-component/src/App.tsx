import React from "react";
import Calendar from "./Calendar/index.tsx";
import dayjs from "dayjs";
function App() {
  return (
    <div className="App">
      <Calendar value={dayjs("2024-11-14")}></Calendar>
    </div>
  );
}

export default App;
