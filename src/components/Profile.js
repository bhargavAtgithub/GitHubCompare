import React, { useState, useEffect } from "react";
import DisplayTable from "./DisplayTable";
import logo from "../assets/GitHub_Logo_White.png";
import UserDisplay from "./UserDisplay";

import { Layout, Menu, Breadcrumb, Input } from "antd";

import "antd/dist/antd.css";

import { connect } from "react-redux";

import { setProfileData, setRepoData } from "../redux/root-reducer.actions";

const Profile = (props) => {
  const [username, setUsername] = useState("");
  const [followerss, setFollowerss] = useState("");

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async () => {
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();

    if (profileJson) {
      props.setProfileData(profileJson);
      props.setRepoData(repoJson);
    }
  };

  const { Search } = Input;

  const { Header, Content, Footer, Sider } = Layout;

  return (
    <>
      <Layout className="layout">
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="logo">
            <a href="https://github.com/" target="_blank">
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "40px",
                }}
              />
            </a>
          </div>{" "}
          <Search
            style={{
              width: "350px",
              marginTop: "15px",
            }}
            placeholder="Search with Github UserName"
            onChange={onChangeHandler}
            onSearch={submitHandler}
            enterButton
          />
        </Header>
        <UserDisplay />
        {/* <DisplayTable /> */}
      </Layout>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setProfileData: (profileData) => dispatch(setProfileData(profileData)),
  setRepoData: (repoData) => dispatch(setRepoData(repoData)),
});

export default connect(null, mapDispatchToProps)(Profile);
