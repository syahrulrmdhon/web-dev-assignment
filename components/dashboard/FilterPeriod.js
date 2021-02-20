import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

const CardFilter = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 3px #00000029;
  border-radius: 2px;
  padding: 10px 20px;
  cursor: pointer;
  width: 50%;
  position: absolute;
  right: 0;
`;

const SpanPeriod = styled.span`
  margin: 20px;
  color: #8b8b8b;
`;

const SpanRange = styled.span`
  margin: 20px;
  font-size: 16px;
  color: #6a6a6a;
`;

const CardDatePicker = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 3px #00000029;
  border-radius: 2px;
  padding: 10px 20px;
  margin-top: 60px;
`;

const FilterPeriod = ({ collapsed, setCollapsed }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <React.Fragment>
      <CardFilter onClick={() => setCollapsed(!collapsed)}>
        <Image src="/calendar.png" width={22} height={22} />
        <SpanPeriod>Period</SpanPeriod>
        <SpanRange>20 February 2021 - 20 February 2021</SpanRange>
        {!collapsed ? (
          <DownOutlined
            style={{ cursor: "pointer" }}
            onClick={() => setCollapsed(!collapsed)}
          />
        ) : (
          <UpOutlined
            style={{ cursor: "pointer" }}
            onClick={() => setCollapsed(!collapsed)}
          />
        )}
      </CardFilter>
      {collapsed && (
        <CardDatePicker>
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
        </CardDatePicker>
      )}
    </React.Fragment>
  );
};

export default FilterPeriod;
