import React from "react";
import "./index.scss";
import { CalendarProps } from ".";
import { Dayjs } from "dayjs";
import Header from "./Header.tsx";
const weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

interface MonthCalendarProps extends CalendarProps {}
const getAllDays = (date: Dayjs) => {
  const daysInMonth = date.daysInMonth();
  const startDate = date.startOf("month");
  const day = startDate.day();
  console.log(daysInMonth, startDate, day);

  const daysInfo = new Array(6 * 7);

  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, "day"),
      currentMonth: false,
    };
  }
  for (let j = day; j < daysInfo.length; j++) {
    const Tday = startDate.add(j - day, "day");
    daysInfo[j] = {
      date: Tday,
      currentMonth: Tday.month() === date.month(),
    };
  }
  return daysInfo;
};
function renderDays(days: Array<{ date: Dayjs; currentMonth: boolean }>) {
  const rows: any = [];
  for (let i = 0; i < 6; i++) {
    const row: any = [];
    for (let j = 0; j < 7; j++) {
      const item = days[i * 7 + j];
      row[j] = (
        <div
          className={
            "calendar-month-body-cell" +
            (item.currentMonth ? " calendar-month-body-cell-current" : "")
          }
        >
          {item.date.date()}
        </div>
      );
    }
    rows.push(row);
  }
  return rows.map((row) => (
    <div className="calendar-month-body-row">{row}</div>
  ));
}
const MonthCalendar: React.FC<MonthCalendarProps> = (props) => {
  const allDays = getAllDays(props.value);
  return (
    <>
      <Header></Header>
      <div className="calendar-month">
        <div className="calendar-month-list">
          {weekList.map((item) => (
            <div key={item} className="calendar-month-list-item">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="calendar-days">{renderDays(allDays)}</div>
    </>
  );
};
export default MonthCalendar;
