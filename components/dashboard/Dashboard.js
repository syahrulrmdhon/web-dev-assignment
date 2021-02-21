import React, { useState } from "react";
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
  const [collapsed, setCollapsed] = useState(false);
  const [MiCollapsed, setMiCollapsed] = useState(true);

  return (
    <ContentCustom className="site-layout-background">
      <Row>
        <Col span={8}>
          <h1>Dashboard</h1>
        </Col>
        <Col span={16}>
          <FilterPeriod collapsed={collapsed} setCollapsed={setCollapsed} />
        </Col>
        <Col span={24}>
          <MarketInsight
            collapsed={MiCollapsed}
            setCollapsed={setMiCollapsed}
          />
        </Col>
      </Row>
    </ContentCustom>
  );
};

export default Dashboard;
