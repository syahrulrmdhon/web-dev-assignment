import React, { useState } from "react";
import { Layout, Menu } from "antd";
import Icon, { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import styled from "styled-components";

const { Sider } = Layout;

const SiderCustom = styled(Sider)`
  display: flex;
  flex-direction: column-reverse;
  &.ant-layout-sider {
    background: #fff;
  }
  .ant-layout-sider-trigger {
    position: unset !important;
    display: none;
  }
`;

const DashboardIcon = () => (
  <Image src="/dash-icon.svg" width={18} height={18} />
);

const Sidebar = ({}) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <SiderCustom
      collapsible
      collapsed={collapsed}
      //   onCollapse={() => setCollapsed(!collapsed)}
      width={200}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item key="2" icon={<MenuOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="1" icon={<Icon component={DashboardIcon} />}>
          Option 1
        </Menu.Item>
      </Menu>
    </SiderCustom>
  );
};

export default Sidebar;
