import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const colorSelector = useSelector((state) => state.globalData.colorState);
  const historyObject = useSelector((state) => state.globalData.historyState);

  let history = useHistory();

  let handelAboutUs = () => {
    history.push("/guide");
  };
  let handeHomePage = () => {
    history.push("/");
  };

  let handelPrivacyPolicy = () => {
    history.push("/privacy");
  };
  let handelCharity = () => {
    history.push("/charity");
  };

  return (
    <>
      <Hidden only={["md", "lg", "xl"]}>
        <Grid
          container
          style={{ background: colorSelector ? "#000000" : "#3f51b5" }}
        >
          <Grid
            item
            xs={12}
            style={{
              paddingLeft: "25px",
              paddingRight: "25px",
              paddingTop: "25px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2
              style={{ color: "white", cursor: "pointer" }}
              onClick={handeHomePage}
            >
              GlobalHot20
            </h2>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              padding: "0px 25px",
              // paddingRight: "25px",
              marginTop: "10px",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={4}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  margin: "2% 0%",
                }}
              >
                <h4
                  style={{
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={() => history.push("/hot-topics")}
                  >
                    HotTopics
                  </a>
                </h4>
              </Grid>

              <Grid
                item
                xs={4}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  margin: "2% 0%",
                }}
              >
                <h4
                  style={{
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://m.facebook.com/GlobalHot20com-103928365311384/posts/?ref=fbb_footer&mt_nav=0&notif_t=page_post_reaction&paipv=1"
                  >
                    Facebook
                  </a>
                </h4>
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  margin: "2% 0%",
                }}
              >
                <h4
                  style={{
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://mobile.twitter.com/globalhot20"
                  >
                    Twitter
                  </a>
                </h4>
              </Grid>

              <Grid
                item
                xs={6}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  margin: "2% 0%",
                }}
              >
                <h4
                  style={{
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={handelAboutUs}
                >
                  Guide
                </h4>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  margin: "2% 0%",
                }}
              >
                <h4
                  style={{
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={handelPrivacyPolicy}
                >
                  Privacy policy
                </h4>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: "25px",
                }}
              >
                <h4 style={{ color: "white", marginTop: "5px" }}>
                  Copyright @ 2021 GlobalHot20
                </h4>
              </Grid>
              {/* <Grid
                item
                xs={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h4
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={handelCharity}
                >
                  Charities
                </h4>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden only={["sm", "xs"]}>
        <style>{`
        .allPages{
          background: ${colorSelector ? "#000000" : "#3f51b5"};
          margin-top: 25px;
        }
        .selectivePage{
          background: ${colorSelector ? "#000000" : "#3f51b5"};
          margin-top: 25px;
          clear: both;
          position: absolute;
          bottom:0;
          overflow:auto;
        }
        .aboutPage{
          background: ${colorSelector ? "#000000" : "#3f51b5"};
          clear: both;
          position: relative;
          bottom:0;
         
        }
        .aboutPageCustom{
          background: ${colorSelector ? "#000000" : "#3f51b5"};
         
         
        }

`}</style>
        <Grid container className="aboutPageCustom">
          <Grid
            item
            xs={12}
            style={{
              paddingLeft: "25px",
              paddingRight: "25px",
              paddingTop: "25px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2
              style={{ color: "white", cursor: "pointer" }}
              onClick={handeHomePage}
            >
              GlobalHot20
            </h2>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              paddingLeft: "25px",
              paddingRight: "25px",
              margin: "10px",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "0% 10%",
                  width: "100%",
                  margin: "1% 0%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <h4
                    style={{ color: "white", cursor: "pointer" }}
                    onClick={() => history.push("/hot-topics")}
                  >
                    HotTopics
                  </h4>

                  <h4 style={{ color: "white", cursor: "pointer" }}>
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://m.facebook.com/GlobalHot20com-103928365311384/posts/?ref=fbb_footer&mt_nav=0&notif_t=page_post_reaction&paipv=1"
                    >
                      Facebook
                    </a>
                  </h4>
                  <h4 style={{ color: "white", cursor: "pointer" }}>
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://mobile.twitter.com/globalhot20"
                    >
                      Twitter
                    </a>
                  </h4>
                  <h4
                    style={{ color: "white", cursor: "pointer" }}
                    onClick={handelAboutUs}
                  >
                    Guide
                  </h4>
                  <h4
                    style={{ color: "white", cursor: "pointer" }}
                    onClick={handelPrivacyPolicy}
                  >
                    Privacy Policies
                  </h4>
                  {/* <h4
                    style={{ color: "white", cursor: "pointer" }}
                    onClick={handelCharity}
                  >
                    Charities
                  </h4> */}
                </div>
              </Grid>
              {/* 
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: "20%",
                  paddingRight: "20%",
                  width: "100%",
                }}
              >


                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <h4
                    style={{ color: "white", cursor: "pointer" }}
                    onClick={handelAboutUs}
                  >
                    Guide
                  </h4>

                  <h4
                    style={{ color: "white", cursor: "pointer" }}
                    onClick={handelPrivacyPolicy}
                  >
                    Privacy policy
                  </h4>
                </div>
              </Grid> */}

              {/* <h4
                    style={{ color: "white", cursor: "pointer" }}
                    onClick={handelCharity}
                  >
                    Charities
                  </h4> */}
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: "25px",
                }}
              >
                <h4 style={{ color: "white", marginTop: "15px" }}>
                  Copyright @ 2021 GlobalHot20
                </h4>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};

export default Footer;
