import React from "react";

const Header = (props) => {
  const {value} = props
  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon">&lt;</div>
        <div className="calendar-header-value">{value.format('YYYY-MM-DD')}</div>
        <div className="calendar-header-icon">&gt;</div>
        <button className="calendar-header-btn">今天</button>
      </div>
    </div>
  );
};
export default Header;
