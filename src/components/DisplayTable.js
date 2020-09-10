import React from "react";
import { Row, Col, Card, List, Divider } from "antd";
import { connect } from "react-redux";

const DisplayTable = ({ profileData, repoData }) => {
  const { Meta } = Card;

  const dateConversion = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()} `;
  };
  return (
    <Row justify="space-around" align="middle">
      <Col justify="center" xs={24} md={6}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src={!profileData.avatar_url ? " " : profileData.avatar_url}
            />
          }
        >
          <Meta
            title={profileData.name}
            description={[
              <div>
                <p>Bio: {profileData.bio} </p>
                <p>Location: {profileData.location}</p>
              </div>,
            ]}
          />
        </Card>
      </Col>
      <Col
        xs={24}
        md={6}
        style={{
          height: "700px",
        }}
      >
        <Divider orientation="left">Large Size</Divider>
        <List
          style={{
            height: "600px",
            overflow: "scroll",
          }}
          size="large"
          bordered
          dataSource={repoData}
          renderItem={(item) => (
            <List.Item>
              <a href={item.html_url} className="header" target="_blank">
                <div>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <p>Pushed At: {dateConversion(item.pushed_at)}</p>
                </div>
              </a>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ profileData, repoData }) => ({
  profileData,
  repoData,
});

export default connect(mapStateToProps)(DisplayTable);
