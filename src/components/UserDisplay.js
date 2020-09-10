import React from "react";
import { Row, Col, Card, List, Divider } from "antd";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";
const UserDisplay = ({ profileData }) => {
  return (
    <Row justify="space-around" align="middle">
      {profileData.map((user) => {
        return <UserProfile profileData={user} />;
      })}
    </Row>
  );
};

const mapStateToProps = ({ profileData }) => ({
  profileData,
});

export default connect(mapStateToProps)(UserDisplay);
