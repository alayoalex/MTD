import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = props => {
  const { onSelectionDateRange } = props;
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  //   const onChange = dates => {
  //     const [start, end] = dates;
  //     setStartDate(start);
  //     setEndDate(end);
  //     onSelectionDateRange(dates);
  //   };

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={update => {
        setDateRange(update);
        onSelectionDateRange(update);
      }}
      isClearable={true}
      placeholderText="Enter Date Range"
    />
  );
};

export default Example;
