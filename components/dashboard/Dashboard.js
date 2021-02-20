import React from "react";
import { Layout, Row, Col } from "antd";
import styled from "styled-components";
import FilterPeriod from "./FilterPeriod";
import MarketInsight from "./MarketInsight";

const { Content } = Layout;

const ContentCustom = styled(Content)`
  padding: 24px;
  margin: 0;
  min-height: 280px;
  h1 {
    font-size: 40px;
    color: #707070c4;
  }
`;

const Dashboard = ({}) => {
  return (
    <ContentCustom className="site-layout-background">
      <Row>
        <Col span={8}>
          <h1>Dashboard</h1>
        </Col>
        <Col span={16}>
          <FilterPeriod />
        </Col>
        <Col span={24}>
          <MarketInsight />
        </Col>
      </Row>
    </ContentCustom>
  );
};

export default Dashboard;
