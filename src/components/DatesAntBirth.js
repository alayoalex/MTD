import moment from "moment";
import { DatePicker, Space } from "antd";
import { Component } from "react";

class Birth extends Component {
  state = {};

  range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  disabledDate = current => {
    // Can not select days before today and today
    return current && current > moment().endOf("day");
  };

  // disabledDateTime = () => {
  //   return {
  //     disabledHours: () => this.range(0, 24).splice(4, 20),
  //     disabledMinutes: () => this.range(30, 60),
  //     disabledSeconds: () => [55, 56],
  //   };
  // };

  // disabledRangeTime = (_, type) => {
  //   if (type === "start") {
  //     return {
  //       disabledHours: () => this.range(0, 60).splice(4, 20),
  //       disabledMinutes: () => this.range(30, 60),
  //       disabledSeconds: () => [55, 56],
  //     };
  //   }
  //   return {
  //     disabledHours: () => this.range(0, 60).splice(20, 4),
  //     disabledMinutes: () => this.range(0, 31),
  //     disabledSeconds: () => [55, 56],
  //   };
  // };

  render() {
    return (
      <Space direction="vertical" size={12}>
        <DatePicker format="YYYY-MM-DD" disabledDate={this.disabledDate} />
      </Space>
    );
  }
}

export default Birth;
