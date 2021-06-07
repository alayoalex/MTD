import React, { useState } from "react";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const DateAnt = props => {
  const { onSelectionDateRange } = props;
  // eslint-disable-next-line no-unused-vars
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();

  // const disabledDate = current => {
  //   if (!dates || dates.length === 0) {
  //     return false;
  //   }
  //   const tooLate = dates[0] && current.diff(dates[0], "days") > 7;
  //   const tooEarly = dates[1] && dates[1].diff(current, "days") > 7;
  //   return tooEarly || tooLate;
  // };

  const onOpenChange = open => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };

  return (
    <RangePicker
      value={hackValue || value}
      // disabledDate={disabledDate}
      onCalendarChange={val => {
        setDates(val);
        onSelectionDateRange(val);
      }}
      onChange={val => setValue(val)}
      onOpenChange={onOpenChange}
    />
  );
};

export default DateAnt;
