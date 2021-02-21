import React, { useState } from "react";
import { Row, Col } from "antd";
import {
  DownOutlined,
  UpOutlined,
  MoreOutlined,
  FallOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import styled from "styled-components";
import Chart from "react-apexcharts";

const CardInsight = styled.div`
  background: #37b04c 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 3px #00000029;
  border-radius: 2px;
  padding: 0px 20px;
  margin-top: 60px;
  cursor: pointer;
  h2 {
    font-size: 20px;
    color: #fff;
  }
  a {
    color: #fff;
    text-decoration: underline;
    margin: 10px;
  }
`;

const CardSales = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 3px #00000029;
  border-radius: 2px;
  padding: 10px 20px;
  margin: 20px 0;
  width: 20%;
  h3 {
    font-size: 30px;
  }
  .stats {
    font-size: 11px;
    strong {
      color: red;
    }
  }
`;

const ColCustom = styled(Col)`
  padding: 10px;
  margin-top: 5px;
`;

const CardStats = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 3px #00000029;
  border-radius: 2px;
  padding: 10px 20px;
  margin: 20px 15px 0 0;
`;

const MarketInsight = ({ collapsed, setCollapsed }) => {
  const [state, setState] = useState({
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: [0, 4],
      },
      title: {
        text: "Traffic Sources",
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001",
      ],
      xaxis: {
        type: "datetime",
      },
      yaxis: [
        {
          title: {
            text: "Website Blog",
          },
        },
        {
          opposite: true,
          title: {
            text: "Social Media",
          },
        },
      ],
    },
  });
  return (
    <React.Fragment>
      <CardInsight onClick={() => setCollapsed(!collapsed)}>
        <Row>
          <ColCustom span={20}>
            <h2>MARKET INSIGHT</h2>
          </ColCustom>
          <ColCustom span={4}>
            <Image src="/Help.png" width={20} height={20} />
            <a href="/">Click here for Help</a>
            {!collapsed ? (
              <DownOutlined
                style={{ cursor: "pointer", color: "#fff" }}
                onClick={() => setCollapsed(!collapsed)}
              />
            ) : (
              <UpOutlined
                style={{ cursor: "pointer", color: "#fff" }}
                onClick={() => setCollapsed(!collapsed)}
              />
            )}
          </ColCustom>
        </Row>
      </CardInsight>
      {collapsed && (
        <React.Fragment>
          <CardSales>
            <Row>
              <Col span={22}>
                <p>Sales Turnover</p>
              </Col>
              <Col span={2}>
                <MoreOutlined />
              </Col>
            </Row>
            <Row>
              <Col span={20}>
                <h3>Rp. 3,600,000</h3>
                <p className="stats">
                  <strong>
                    <FallOutlined /> 13.8%
                  </strong>{" "}
                  last period in products sold
                </p>
              </Col>
              <Col span={4}>
                <Image src="/sales.svg" height={49} width={43} />
              </Col>
            </Row>
          </CardSales>
          <Row>
            <Col span={14}>
              <CardStats>
                Stats
                <Chart
                  options={state.options}
                  series={state.series}
                  type="line"
                  height={350}
                />
              </CardStats>
            </Col>
            <Col span={5}>
              <CardStats>Top Sell</CardStats>
            </Col>
            <Col span={5}>
              <CardStats>Top Competitors</CardStats>
            </Col>
          </Row>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MarketInsight;
