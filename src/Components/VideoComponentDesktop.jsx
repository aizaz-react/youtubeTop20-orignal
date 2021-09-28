import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import VideoViewInfoDesktop from "./CustomComponents/VideoViewInfoDesktop";

import VideoVIewSimpleDesktop from "./CustomComponents/VideoVIewSimpleDesktop";
import { Hidden } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { getGlobalTrending } from "../action/GlobalAction";
import Button from "@material-ui/core/Button";

import {
  getAdsRectangleLarge,
  getAdsRectangleSmall,
} from "../Functions/GlobalFunctions";

const VideoComponentDesktop = () => {
  const dispatch = useDispatch();
  const colorSelector = useSelector((state) => state.globalData.colorState);

  const hot20Data = useSelector((state) => state.globalData.hot20Videos);
  const top20Data = useSelector((state) => state.globalData.top20NewVideos);

  let handelGlobalTrending = () => {
    dispatch(getGlobalTrending(true));

    setTimeout(() => {
      dispatch(getGlobalTrending(false));
    }, 5000);
  };

  return (
    <Hidden only={["xs", "sm"]}>
      {top20Data !== undefined && top20Data.length > 0 ? (
        top20Data.map((e, i) => {
          return (
            <Grid
              container
              style={{ paddingLeft: "6%", paddingRight: "6%" }}
              spacing={5}
              key={i}
            >
              <Grid item xs={6}>
                <VideoViewInfoDesktop key={i} top={e.id} data={e.hotData} />
              </Grid>
              <Grid item xs={6}>
                <VideoViewInfoDesktop key={i} top={e.id} data={e} />
              </Grid>
            </Grid>
          );
        })
      ) : (
        <Grid
          container
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ color: colorSelector ? "white" : "#3F51B5" }}>
            ☹️ Sorry! No Viral Videos Found.
          </h1>
          <br />
          <Button
            style={{
              height: "41px",

              fontWeight: "600",
              color: !colorSelector ? "#3F51B5" : "white",
              border: colorSelector ? "2px solid white" : "2px solid #3F51B5",
            }}
            onClick={handelGlobalTrending}
          >
            See Global Viral Videos
          </Button>
        </Grid>
      )}
    </Hidden>
  );
};

export default VideoComponentDesktop;
