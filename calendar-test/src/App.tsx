import React, { useEffect, useRef, useState } from "react";
import Calendar from "./calendar.tsx";
interface CalendarRef {
  getDate:()=>Date
  setDate:(date:Date)=>void
}
function App() {
  const CalendarRef = useRef<CalendarRef>(null)
  const [date,setDate] = useState(new Date())
  useEffect(()=>{
    CalendarRef?.current?.setDate(new Date('2014-07-07'))
  },[])
  return (
    <>
      <Calendar ref={CalendarRef} defaultValue={new Date('2013-10-10')} onChange={(newDate)=>{
        setDate(newDate)
        console.log(newDate.toLocaleDateString(),'~~~~~~')
      }}></Calendar>
    </>
  );
}

export default App;
