import React from "react";
import "./index.scss";
import MonthCalendar from "./MonthCalendar.tsx";
import { Dayjs } from "dayjs";
export interface CalendarProps {
  value: Dayjs;
}
const Calendar: React.FC<CalendarProps> = (props) => {
  return (
    <div className="calendar">
      <MonthCalendar {...props}></MonthCalendar>
    </div>
  );
};
export default Calendar;
