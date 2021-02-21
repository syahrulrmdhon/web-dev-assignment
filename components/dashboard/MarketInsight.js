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
import { Chart } from "react-google-charts";

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
  h4 {
    font-sze: 24px;
    color: #4d4f5c;
    font-weight: 400;
  }
`;

const CardProduct = styled(Row)`
  background: #ffe7bd 0% 0% no-repeat padding-box;
  border-radius: 4px;
  &.bottom {
    border: 0.5px solid #c5c5c59c;
    margin: 10px 0 0 0;
    font-size: 10px;
    background: #fff !important;
  }
`;

const ColProd = styled(Col)`
  margin-bottom: -10px;
  &.content {
    padding: 10px;
    span {
      margin-left: 30px;
    }
  }
  &.bottom {
    margin-bottom: 0;
  }
`;

const MarketInsight = ({ collapsed, setCollapsed }) => {
  const loop = [0, 1, 2, 3];

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
                <Row>
                  <Col span={23}>
                    <h4>AVERAGE PURCHASE VALUE</h4>
                  </Col>
                  <Col span={1}>
                    <MoreOutlined />
                  </Col>
                </Row>
                <Chart
                  width={"500px"}
                  height={"300px"}
                  chartType="ComboChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    [
                      "Month",
                      "Bolivia",
                      "Ecuador",
                      "Madagascar",
                      "Papua New Guinea",
                      "Rwanda",
                      "Average",
                    ],
                    ["2004/05", 165, 938, 522, 998, 450, 614.6],
                    ["2005/06", 135, 1120, 599, 1268, 288, 682],
                    ["2006/07", 157, 1167, 587, 807, 397, 623],
                    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
                    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
                  ]}
                  options={{
                    title: "Monthly Coffee Production by Country",
                    vAxis: { title: "Cups" },
                    hAxis: { title: "Month" },
                    seriesType: "bars",
                    series: { 5: { type: "line" } },
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
              </CardStats>
            </Col>
            <Col span={5}>
              <CardStats>
                <Row>
                  <Col span={23}>
                    <h4>BEST SELLING SKU</h4>
                  </Col>
                  <Col span={1}>
                    <MoreOutlined />
                  </Col>
                </Row>
                <CardProduct>
                  <ColProd span={8}>
                    <Image src="/susu.jpg" width={100} height={105} />
                  </ColProd>
                  <ColProd className="content" span={16}>
                    <h3>Susu</h3>
                    <p>
                      Rp. 45.000,- <span>3</span>
                    </p>
                  </ColProd>
                </CardProduct>
                {loop.map((item) => (
                  <CardProduct className="bottom" key={item}>
                    <ColProd className="bottom" span={8}>
                      <Image src="/susu.jpg" width={60} height={65} />
                    </ColProd>
                    <ColProd className="content" span={16}>
                      <h3>Susu</h3>
                      <p>
                        Rp. 45.000,- <span>3</span>
                      </p>
                    </ColProd>
                  </CardProduct>
                ))}
              </CardStats>
            </Col>
            <Col span={5}>
              <CardStats>
                <Row>
                  <Col span={23}>
                    <h4>TOP COMPETITOR SKU</h4>
                  </Col>
                  <Col span={1}>
                    <MoreOutlined />
                  </Col>
                </Row>
                <CardProduct>
                  <ColProd span={8}>
                    <Image src="/susu.jpg" width={100} height={105} />
                  </ColProd>
                  <ColProd className="content" span={16}>
                    <h3>Susu</h3>
                    <p>
                      Rp. 45.000,- <span>3</span>
                    </p>
                  </ColProd>
                </CardProduct>
                {loop.map((item) => (
                  <CardProduct className="bottom" key={item}>
                    <ColProd className="bottom" span={8}>
                      <Image src="/susu.jpg" width={60} height={65} />
                    </ColProd>
                    <ColProd className="content" span={16}>
                      <h3>Susu</h3>
                      <p>
                        Rp. 45.000,- <span>3</span>
                      </p>
                    </ColProd>
                  </CardProduct>
                ))}
              </CardStats>
            </Col>
          </Row>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MarketInsight;
