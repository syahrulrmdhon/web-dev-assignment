import React from "react";
import { Row, Col } from "antd";
import {
  DownOutlined,
  UpOutlined,
  MoreOutlined,
  FallOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import styled from "styled-components";

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

const MarketInsight = ({ collapsed, setCollapsed }) => {
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
      )}
    </React.Fragment>
  );
};

export default MarketInsight;
