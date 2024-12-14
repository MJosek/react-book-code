import React, { useImperativeHandle, useState } from "react";
import "./calendar.css";
import { useControllableValue } from "ahooks";

const monthList = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月",
];
interface CalendarProps {
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}
interface CalendarRef {
    getDate:()=>Date
    setDate:(date:Date)=>void
}

const InternalCalendar: React.ForwardRefRenderFunction<CalendarRef,CalendarProps> = (props,ref) => {
  const [date, setDate] = useControllableValue(props,{
    defaultValue:new Date()
  })
  useImperativeHandle(ref,()=>{
    return {
        getDate(){
            return date;
        },
        setDate(date){
            setDate(date)
        }
    }
  })
  const handlePreClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };
  const handleNextClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };
  const clickDate = (j:number)=>{
    const curDate = new Date(date.getFullYear(),date.getMonth(),j)
    setDate(curDate)
  }
  const renderDates = (): React.ReactNode => {
    const days: any = [];

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const dayCount = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={"empty-" + i} className="empty"></div>);
    }
    for (let j = 0; j < dayCount; j++) {
      if (date.getDate() === j + 1) {
        days.push(
          <div key={"day" + j} className="day selected" onClick={()=>clickDate(j+1)}>
            {j + 1}
          </div>
        );
      } else {
        days.push(
          <div key={"day" + j} className="day" onClick={()=>clickDate(j+1)}>
            {j + 1}
          </div>
        );
      }
    }
    return days;
  };
  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePreClick}>&lt;</button>
        <div>
          {date.getFullYear()}年{monthList[date.getMonth()]}
        </div>
        <button onClick={handleNextClick}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDates()}
      </div>
    </div>
  );
};
const Calendar = React.forwardRef(InternalCalendar)
export default Calendar;
