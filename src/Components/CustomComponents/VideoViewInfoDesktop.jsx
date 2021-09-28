import React, { useState, useEffect } from "react";
import { Hidden } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Fab from "@material-ui/core/Fab";

import { Typography } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import youtubeicon from "../images/youtubeicon.svg";
import { componentHeight } from "../../action/GlobalAction";
import { useDispatch, useSelector } from "react-redux";

const VideoViewInfoDesktop = (props) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [toolTipOpen, setToolTipOpen] = useState(false);
  const [toolTipOpenChannelTitle, setToolTipOpenChannelTitle] = useState(false);
  const colorSelector = useSelector((state) => state.globalData.colorState);

  const handleCloseTooltip = () => {
    setToolTipOpen(false);
  };
  const handleCloseTooltipChannelTitle = () => {
    setToolTipOpenChannelTitle(false);
  };

  const handleOpenTooltip = () => {
    setToolTipOpen(true);
  };
  const handleOpenTooltipChannelTitle = () => {
    setToolTipOpenChannelTitle(true);
  };

  let {
    video_channelTitle,
    video_publishedAt,
    video_id,
    video_title,
    video_viewCount,
    view_count_per_24hour,
    video_thumbnails,
    views_by_time,
  } = props.data;
  const [dynamicVideo, setDynamicVideo] = useState("");

  let handelClick = (e) => {
    setOpen(true);
    setDynamicVideo(e);
  };
  const handleClose = () => {
    setOpen(false);
  };

  var n = video_thumbnails.indexOf(",");

  let imageUrl = video_thumbnails.substring(9, n - 1);

  const [loadImage, setLoadImage] = useState(false);

  let handelLoadImage = () => {
    setLoadImage(true);
  };

  let box = document.getElementById("cardFull");
  let height;
  if (box !== null && loadImage) {
    height = box.offsetHeight;
  }

  useEffect(() => {
    if (loadImage) {
      dispatch(componentHeight(height));
    }
  }, [height]);
  let viewsOneHour = <b>Views in 1 Hour:</b>;
  return (
    <Hidden only={["xs", "sm"]}>
      <React.Fragment>
        <Dialog
          fullWidth={true}
          maxWidth={"md"}
          open={open}
          onClose={handleClose}
        >
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${dynamicVideo}?enablejsapi=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Dialog>
      </React.Fragment>

      <Grid container id="cardFull">
        <Grid item xs={12}>
          <Grid
            container
            className={
              colorSelector ? "videoviewdesktopDark" : "videoviewdesktop"
            }
          >
            <Grid item xs={12} style={{ position: "relative" }}>
              <div
                className="frameContainer"
                onClick={() => handelClick(video_id)}
              >
                <img
                  src={imageUrl}
                  width="100%"
                  className="videoView"
                  onLoad={handelLoadImage}
                />
                <img
                  src={youtubeicon}
                  style={{
                    position: "absolute",
                    left: "45%",
                    top: "40%",
                    cursor: "pointer",
                  }}
                />
              </div>
              <Tooltip
                title="Add"
                aria-label="add"
                style={{
                  position: "absolute",
                  top: "5px",
                  left: "15px",
                  width: "40px",
                  height: "40px",
                  background: colorSelector ? "#424242" : "#3F51B5",
                }}
              >
                <Fab color="primary">
                  <h3>#{props.top}</h3>
                </Fab>
              </Tooltip>
            </Grid>

            <Grid item xs={12}>
              {/* <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                #{props.top}
              </p> */}
              <Grid container spacing={1}>
                <Grid item xs={12} style={{ marginTop: "15px" }}>
                  <Tooltip
                    arrow
                    open={toolTipOpen}
                    onClose={handleCloseTooltip}
                    onOpen={handleOpenTooltip}
                    title={video_title}
                  >
                    <Typography noWrap>{video_title}</Typography>
                  </Tooltip>
                </Grid>

                <Grid item xs={6}>
                  <Tooltip
                    arrow
                    open={toolTipOpenChannelTitle}
                    onClose={handleCloseTooltipChannelTitle}
                    onOpen={handleOpenTooltipChannelTitle}
                    title={video_channelTitle}
                  >
                    <Typography noWrap>
                      <b>Channel:</b> {video_channelTitle}
                    </Typography>
                  </Tooltip>
                </Grid>
                <Grid item xs={6}>
                  {views_by_time ? (
                    <Typography noWrap>
                      <b>Avg views per hour:</b> {views_by_time}
                    </Typography>
                  ) : (
                    <Typography noWrap>
                      <b>Views in 24 Hours:</b> {view_count_per_24hour}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <p>
                    <b>Days Old:</b> {video_publishedAt}
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <Typography noWrap>
                    <b>Total Views:</b> {video_viewCount}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Hidden>
  );
};

export default VideoViewInfoDesktop;
