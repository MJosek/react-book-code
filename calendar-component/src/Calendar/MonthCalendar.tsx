import React from "react";
import "./index.scss";
import { CalendarProps } from ".";
import { Dayjs } from "dayjs";
import CalendarLocale from "./locale/en-US.ts";
import classnames from "classnames";
const weekList = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

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
function renderDays(
  days: Array<{ date: Dayjs; currentMonth: boolean }>,
  dateRender: MonthCalendarProps["dateRender"],
  dateInnerContent: MonthCalendarProps["dateInnerContent"],
  value: MonthCalendarProps["value"]
) {
  const rows: any = [];
  for (let i = 0; i < 6; i++) {
    const row: any = [];
    for (let j = 0; j < 7; j++) {
      const item = days[i * 7 + j];
      row[j] = (
        <div
          className={
            "calendar-month-body-cell " +
            (item.currentMonth ? "calendar-month-body-cell-current" : "")
          }
        >
          {dateRender ? (
            dateRender(item.date)
          ) : (
            <div className="calendar-month-body-cell-date">
              <div
                className={classnames(
                  "calendar-month-body-cell-date-value",
                  value.format("YYYY-MM-DD") === item.date.format("YYYY-MM-DD")
                    ? "calendar-month-body-cell-date-selected"
                    : ""
                )}
              >
                {item.date.date()}
              </div>
              <div className="calendar-month-cell-body-date-content">
                {dateInnerContent?.(item.date)}
              </div>
            </div>
          )}
        </div>
      );
    }
    rows.push(row);
  }
  return rows.map((row, i) => (
    <div key={i} className="calendar-month-body-row">
      {row}
    </div>
  ));
}
const MonthCalendar: React.FC<MonthCalendarProps> = (props) => {
  const { dateRender, dateInnerContent, locale, value } = props;
  const allDays = getAllDays(value);
  console.log(value, "value");

  return (
    <>
      <div className="calendar-month">
        <div className="calendar-month-list">
          {weekList.map((item) => (
            <div key={item} className="calendar-month-list-item">
              {CalendarLocale[locale!].week[item]}
            </div>
          ))}
        </div>
      </div>
      <div className="calendar-days">
        {renderDays(allDays, dateRender, dateInnerContent, value)}
      </div>
    </>
  );
};
export default MonthCalendar;
