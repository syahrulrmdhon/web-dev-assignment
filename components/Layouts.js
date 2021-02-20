import React from "react";
import { Layout } from "antd";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layouts = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <Layout style={{height: "80vh"}}>
        <Sidebar />
        <Layout style={{ padding: "0 24px 24px" }}>{children}</Layout>
      </Layout>
    </Layout>
  );
};

export default Layouts;
