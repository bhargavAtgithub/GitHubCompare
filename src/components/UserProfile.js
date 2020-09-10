import React from "react";
import { Row, Col, Card, List, Divider } from "antd";

const UserProfile = ({ profileData }) => {
  const { Meta } = Card;

  return (
    <Col justify="center" xs={24} md={4}>
      <Card
        hoverable
        style={{ width: 250, margin: "20px" }}
        cover={
          <img
            alt="example"
            src={!profileData.avatar_url ? " " : profileData.avatar_url}
            style={{
              height: "250px",
            }}
          />
        }
      >
        <Meta
          title={profileData.login}
          description={[
            <div>
              <p>Name: {profileData.name || "Not Available"}</p>
              <p>Bio: {profileData.bio || "Not Available"} </p>
              <p>Location: {profileData.location || "Not Available"}</p>
              <Divider orientation="left" />
              <p>Followers: {profileData.followers || "No followers yet"}</p>
              <p>Following: {profileData.following || "Din't follow anyone"}</p>
              <Divider orientation="left" />
              <p>Public Repos: {profileData.public_repos}</p>
              <p>Public Gists: {profileData.public_gists}</p>
              <Divider orientation="left" target="_blank" />
              <p>
                <a href={profileData.html_url}>{profileData.html_url}</a>
              </p>
            </div>,
          ]}
        />
      </Card>
    </Col>
  );
};

export default UserProfile;
