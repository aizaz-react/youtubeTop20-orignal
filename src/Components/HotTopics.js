import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  Grid,
  List,
  Divider,
  ListItemText,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import {
  PersonOutlineOutlined,
  DateRangeOutlined,
  ArrowRightAltOutlined,
} from "@material-ui/icons";
import Header from "./Header";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import {
  getBlogRecentList,
  getBlogList,
  getBlogCategoryList,
} from "../Services/GlobalServices";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

function MediaCard() {
  const classes = useStyles();
  const [image, setImage] = useState([]);
  const [blogData, setblogData] = useState([]);
  const [pageCount, setpageCount] = useState();
  const [pageNumber, setpageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState();
  const colorSelector = useSelector((state) => state.globalData.colorState);
  const [categories, setCategories] = useState();
  const [recentBlog, setRecentBlog] = useState();
  useEffect(() => {
    blogList(pageNumber);
  }, []);
  useEffect(() => {
    blogCategoryList();
  }, []);
  const blogList = (pageNumber) => {
    getBlogList(pageNumber).then((res) => {
      const data = res.data?.results;
      if (data?.length) {
        const page = res.data?.total_count / res.data?.page_size;
        setpageCount(Math.ceil(page));
        setblogData(data);
        console.log(data);
      }
    });
  };

  // setImage(item.image);
  const blogCategoryList = () => {
    getBlogCategoryList().then((res) => {
      const data = res.data?.results;
      if (data?.length) {
        setCategories(data);
      }
    });
    getBlogRecentList().then((res) => {
      console.log(res, "categories==");
      const data = res?.data;
      if (data?.length) {
        setRecentBlog(data);
      }
    });
  };
  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setpageNumber(newPage);
    blogList(newPage);
  };
  console.log(blogData, recentBlog, categories, "categories==");
  return (
    <div>
      <Header />
      <Container
        maxWidth="md"
        style={{ marginTop: "40px", marginBottom: "30px" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={3}>
              {blogData?.map((item, key) => {
                if (key === 0) {
                  return (
                    <Grid item xs={12} key={key}>
                      {item.iframe === false ? (
                        <CardMedia
                          className={classes.media}
                          style={{ height: "350px" }}
                          image={item.image}
                          title="Contemplative Reptile"
                        />
                      ) : (
                        <ReactPlayer width="100%" url={item.iframe} />
                      )}
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          style={{ color: colorSelector ? "white" : "black" }}
                        >
                          {item.title}
                        </Typography>
                        <CardActions
                          style={{ padding: "0px", marginTop: "10px" }}
                        >
                          <Typography
                            component="p"
                            variant="body2"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              color: colorSelector ? "white" : "black",
                            }}
                          >
                            <DateRangeOutlined
                              color="primary"
                              style={{
                                marginRight: "5px",
                                fontSize: "18px",
                                verticalAlign: "middle",
                                color: colorSelector ? "white" : "black",
                              }}
                            />
                            {/* May 16, 2021 */}
                            {moment(item.date).format("ll")}
                          </Typography>
                          <Typography
                            size="small"
                            variant="body2"
                            style={{
                              textTransform: "capitalize",
                              color: colorSelector ? "white" : "black",
                            }}
                          >
                            <PersonOutlineOutlined
                              color="primary"
                              style={{
                                marginRight: "5px",
                                fontSize: "18px",
                                verticalAlign: "middle",
                                color: colorSelector ? "white" : "black",
                              }}
                            />
                            {item.author_name}
                          </Typography>
                        </CardActions>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          style={{
                            lineHeight: "24px",
                            marginTop: "15px",
                            color: colorSelector ? "white" : "black",
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </CardContent>
                      <CardActions style={{ marginTop: "-17px" }}>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/read-more/${item.id}`}
                        >
                          <Button
                            size="small"
                            color="primary"
                            style={{
                              textTransform: "capitalize",
                              color: colorSelector ? "white" : "black",
                            }}
                          >
                            Read More
                            <ArrowRightAltOutlined
                              color="primary"
                              style={{
                                color: colorSelector ? "white" : "black",
                              }}
                            />
                          </Button>
                        </Link>
                      </CardActions>
                    </Grid>
                  );
                } else {
                  return (
                    <Grid item xs={12} sm={6} key={key}>
                      {/* <CardMedia
                                                className={classes.media}
                                                style={{ height: "350px" }}
                                                image={item.image}
                                                title="Contemplative Reptile"
                                            /> */}
                      {item.iframe === false ? (
                        <CardMedia
                          className={classes.media}
                          style={{ height: "350px" }}
                          image={item.image}
                          title="Contemplative Reptile"
                        />
                      ) : (
                        <ReactPlayer width="100%" url={item.iframe} />
                      )}
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          style={{ color: colorSelector ? "white" : "black" }}
                        >
                          {item.title}
                        </Typography>
                        <CardActions
                          style={{ padding: "0px", marginTop: "10px" }}
                        >
                          <Typography
                            component="p"
                            variant="body2"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              color: colorSelector ? "white" : "black",
                            }}
                          >
                            <DateRangeOutlined
                              color="primary"
                              style={{
                                marginRight: "5px",
                                fontSize: "18px",
                                verticalAlign: "middle",
                              }}
                            />
                            May 16, 2021
                          </Typography>
                          <Typography
                            size="small"
                            variant="body2"
                            style={{
                              textTransform: "capitalize",
                              color: colorSelector ? "white" : "black",
                            }}
                          >
                            <PersonOutlineOutlined
                              color="primary"
                              style={{
                                marginRight: "5px",
                                fontSize: "18px",
                                verticalAlign: "middle",
                                color: colorSelector ? "white" : "black",
                              }}
                            />
                            {item.author_name}
                          </Typography>
                        </CardActions>

                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          style={{
                            lineHeight: "24px",
                            marginTop: "15px",
                            color: colorSelector ? "white" : "black",
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </CardContent>
                      <CardActions style={{ marginTop: "-17px" }}>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/read-more/${item.id}`}
                        >
                          <Button
                            size="small"
                            color="primary"
                            style={{
                              textTransform: "capitalize",
                              color: colorSelector ? "white" : "black",
                            }}
                          >
                            Read More
                            <ArrowRightAltOutlined color="primary" />
                          </Button>
                        </Link>
                      </CardActions>
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography
              color="primary"
              style={{
                marginTop: "20px",
                color: colorSelector ? "white" : "black",
              }}
            >
              Recent Posts
            </Typography>
            <List className={classes.root}>
              {recentBlog?.map((items, key) => {
                return (
                  <>
                    <ListItemText
                      key={key}
                      style={{
                        marginBottom: "18px",
                        color: colorSelector ? "white" : "black",
                      }}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                            style={{ color: colorSelector ? "white" : "black" }}
                          >
                            {items.title}
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "13px",
                              color: colorSelector ? "white" : "black",
                            }}
                          >
                            {moment(items.date).format("ll")}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                    <Divider component="li" />
                  </>
                );
              })}
            </List>
            <Typography
              color="primary"
              style={{
                marginTop: "20px",
                color: colorSelector ? "white" : "black",
              }}
            >
              Categories
            </Typography>
            {categories?.map((item, key) => {
              return (
                <Button
                  key={key}
                  variant="contained"
                  style={{
                    color: "black",
                    borderRadius: " 22px 22px",
                    padding: "3px 16px",
                    fontSize: "12px",
                    marginTop: "10px",
                    textTransform: "capitalize",
                    marginLeft: "7px",
                    marginRight: "7px",
                  }}
                >
                  {item.category}
                </Button>
              );
            })}
          </Grid>
        </Grid>
        <Container maxWidth="sm">
          <div style={{ color: colorSelector ? "white" : "black" }}>
            <Pagination
              count={pageCount}
              variant="outlined"
              style={{ marginTop: "60px", marginBottom: "50px" }}
              onChange={handleChangePage}
              page={pageNumber}
            />
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default MediaCard;
