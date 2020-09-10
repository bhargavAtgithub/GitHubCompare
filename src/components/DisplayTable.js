import React from "react";
import { Row, Col, Card, List, Divider } from "antd";

const DisplayTable = ({ profileData, repoData }) => {
  const { Meta } = Card;

  const dateConversion = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()} `;
  };
  return (
    <Row justify="space-around" align="middle">
      
      <Col
        xs={24}
        md={6}
        style={{
          height: "700px",
        }}
      >
        <Divider orientation="left">Repositories</Divider>
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

export default DisplayTable;
