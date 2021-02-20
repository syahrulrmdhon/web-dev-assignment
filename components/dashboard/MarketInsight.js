import React from "react";
import { Row, Col } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
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
    </React.Fragment>
  );
};

export default MarketInsight;
