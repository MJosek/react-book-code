import React, { CSSProperties, ReactNode } from "react";
import "./index.scss";
import MonthCalendar from "./MonthCalendar.tsx";
import { Dayjs } from "dayjs";
import Header from "./Header.tsx";
import classnames from "classnames";
import LocaleContext from "./locale/LocaleContext.tsx";
export interface CalendarProps {
  value: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
  // 定制日期显示，会完全覆盖日期单元格
  dateRender?: (currentDate: Dayjs) => ReactNode;
  // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;
  // 国际化相关
  locale?: string;
  onChange?: (date: Dayjs) => void;
}
const Calendar: React.FC<CalendarProps> = (props) => {
  const { style, className, locale,value } = props;
  const classNames = classnames("calendar", className);
  return (
    <LocaleContext.Provider value={{ locale: locale! }}>
      <div className={classNames} style={style}>
        <Header value={value}></Header>
        <MonthCalendar {...props}></MonthCalendar>
      </div>
    </LocaleContext.Provider>
  );
};
export default Calendar;
