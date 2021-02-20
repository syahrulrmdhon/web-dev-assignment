import React from "react";
import { Layout, Row, Col } from "antd";
import styled from "styled-components";
import Image from "next/image";

const { Header } = Layout;

const HeaderCustom = styled(Header)`
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 0 30px;
`;

const LogoWrapper = styled.div`
  margin: 10px;
`;

const SpanPowered = styled.span`
  margin: 10px;
  font-size: 11px;
`;

const WrapperRight = styled.span`
  margin: 10px;
`;

const PInfo = styled.div`
  height: 12px;
  &.user {
    font-size: 14px;
    margin-bottom: 5px;
  }
  &.company {
    font-size: 10px;
    color: #727272;
  }
`;

const Navbar = () => {
  return (
    <HeaderCustom>
      <Row>
        <Col span={12}>
          <LogoWrapper>
            <Image src="/advotics-logo-optimize.jpg" width={128} height={30} />
            <SpanPowered>
              powered by{" "}
              <Image
                style={{ margin: "10px" }}
                src="/advotics-logo-optimize.jpg"
                width={73}
                height={18}
              />
            </SpanPowered>
          </LogoWrapper>
        </Col>
        <Col span={12} style={{ textAlign: "end" }}>
          <Row>
            <Col span={20} style={{ marginTop: "-10px" }}>
              <PInfo className="user">Username</PInfo>
              <PInfo className="company">company name</PInfo>
            </Col>
            <Col style={{ marginTop: "10px" }}>
              <WrapperRight>
                <Image
                  style={{ marginTop: "100px" }}
                  src="/Profile.svg"
                  width={32}
                  height={32}
                />
              </WrapperRight>
            </Col>
            <Col>
              <WrapperRight>
                <Image src="/logout.png" width={15} height={15} />
              </WrapperRight>
            </Col>
          </Row>
        </Col>
      </Row>
    </HeaderCustom>
  );
};

export default Navbar;
