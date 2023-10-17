import React from "react";
import { Layout } from "antd";
import { DashboardOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faChartLine,
  faMoneyCheckDollar,
  faRectangleAd,
  faQuestion,
  faUser,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../style.css";
const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  // lineHeight: '100px',
  color: "#fff",
  backgroundColor: "#040440",
  width: "200px",
  maxWidth: "400px",
  paddingLeft: "20px",
  minHeight: "90vh",
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  left: 0,
};

const profile =
  "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60";

const Sidebar = () => (
  // <Space direction="vertical" size={[0, 48]}>
  <Layout className="sidebar_layout">
    <Sider style={siderStyle}>
      <div className="slider_main">
        <div className="dashboard">
          <DashboardOutlined style={{ paddingRight: "10px" }} /> Dashboard
        </div>
        <div className="dashboard_option active">
          <FontAwesomeIcon
            style={{ paddingRight: "10px" }}
            icon={faChartLine}
          />{" "}
          Dashboard
        </div>
        <div className="dashboard_option">
          <FontAwesomeIcon style={{ paddingRight: "10px" }} icon={faThumbsUp} />
          Product
          <FontAwesomeIcon style={{ float: "right" }} icon={faChevronRight} />
        </div>
        <div className="dashboard_option">
          <FontAwesomeIcon style={{ paddingRight: "10px" }} icon={faUser} />
          Customers
          <FontAwesomeIcon style={{ float: "right" }} icon={faChevronRight} />
        </div>
        <div className="dashboard_option">
          <FontAwesomeIcon
            style={{ paddingRight: "10px" }}
            icon={faMoneyCheckDollar}
          />
          Income
          <FontAwesomeIcon style={{ float: "right" }} icon={faChevronRight} />
        </div>
        <div className="dashboard_option">
          <FontAwesomeIcon
            style={{ paddingRight: "10px" }}
            icon={faRectangleAd}
          />
          Promote
          <FontAwesomeIcon style={{ float: "right" }} icon={faChevronRight} />
        </div>
        <div className="dashboard_option">
          <FontAwesomeIcon style={{ paddingRight: "10px" }} icon={faQuestion} />
          help
          <FontAwesomeIcon style={{ float: "right" }} icon={faChevronRight} />
        </div>
      </div>
      <div className="dashboard_option active dashboard_profile">
        {/* <Avatar style={{marginRight: '15px'}}size="large" src={profile} /> */}
        <img src={profile} alt="Avatar" className="avatar"></img>
        <div style={{ lineHeight: "2px" }}>
          <p style={{ fontSize: "12px", fontWeight: "bold" }}>Evano</p>
          <p style={{ fontSize: "10px" }}>Project Manager</p>
        </div>
        <FontAwesomeIcon style={{ float: "right" }} icon={faChevronRight} />
      </div>
    </Sider>
  </Layout>
);

export default Sidebar;
