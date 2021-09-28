import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardActions, CardContent, CardMedia, Button, Typography, Container, Grid, List, Divider, ListItemText } from '@material-ui/core';
import { PersonOutlineOutlined, DateRangeOutlined } from '@material-ui/icons';
import Header from './Header'
import moment from 'moment'
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player"
import { getBlogRecentList, getSingleBlogList, getBlogCategoryList } from '../Services/GlobalServices'
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },

}));

function MediaCard(props) {
    const classes = useStyles();
    const router = props.match
    const [blogData, setblogData] = useState();
    const [id, setid] = useState(null);
    const [categories, setCategories] = useState();
    const colorSelector = useSelector((state) => state.globalData.colorState);
    const [recentBlog, setRecentBlog] = useState();
    useEffect(() => {
        blogList(router.params.id)
        setid(router.params.id)
    }, [router])
    useEffect(() => {
        blogCategoryList()
    }, [])
    const blogList = (id) => {
        getSingleBlogList(id).then(res => {
            const data = res?.data
            console.log(res,data,'blogData==');
            if (res?.status === 200) {
                setblogData(data)
            }
        })
    }
    const blogCategoryList = () => {
        getBlogCategoryList().then(res => {
            const data = res.data?.results
            if (data?.length) {
                setCategories(data)
            }
        })
        getBlogRecentList().then(res => {
            const data = res?.data
            if (data?.length) {
                setRecentBlog(data)
            }
        })
    }

    return (
        <div>
            <Header />

            <Container maxWidth="md" style={{ marginTop: "40px", marginBottom: "30px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <Grid container spacing={3}>
                            {console.log(blogData,'blogData==')}
                            {
                                <Grid item xs={12}>
                                    {blogData?.iframe === false ? (
                                        <CardMedia
                                            className={classes.media}
                                            style={{ height: "350px" }}
                                            image={blogData?.image}
                                            title="Contemplative Reptile"
                                        />) : (

                                        <ReactPlayer
                                            width="100%"
                                            url={blogData?.iframe}
                                        />)

                                    }
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2"
                                        style={{ color: colorSelector ? "white" : "black" }}
                                        >
                                            {blogData?.title}
                                        </Typography>
                                        <CardActions style={{ padding: "0px", marginTop: "10px" }}>
                                            <Typography component="p" variant="body2" size="small" style={{ textTransform: "capitalize",color: colorSelector ? "white" : "black" }}>
                                                <DateRangeOutlined color="primary" style={{ marginRight: "5px", fontSize: "18px", verticalAlign: "middle" }} />

                                                {moment(blogData?.date).format('ll')}
                                            </Typography>
                                            <Typography size="small" variant="body2" style={{ textTransform: "capitalize",color: colorSelector ? "white" : "black" }} >
                                                <PersonOutlineOutlined color="primary" style={{ marginRight: "5px", fontSize: "18px", verticalAlign: "middle" }} />
                                                {blogData?.author_name}
                                            </Typography>
                                        </CardActions>
                                        <Typography variant="body2" color="textSecondary" component="p" style={{ lineHeight: "24px", marginTop: "15px",color: colorSelector ? "white" : "black" }} >
                                            <div dangerouslySetInnerHTML={{ __html: blogData?.desc }}></div>
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ marginTop: "-17px" }}>

                                    </CardActions>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography color="primary" style={{ marginTop: "20px",color: colorSelector ? "white" : "black" }} >
                            Recent Posts
                        </Typography>
                        <List className={classes.root}>
                            {
                                recentBlog?.map((items, key) => {
                                    return <>
                                        <ListItemText
                                            key={key}
                                            style={{ marginBottom: "18px" }}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                        style={{color: colorSelector ? "white" : "black" }}
                                                    >
                                                        {items.title}
                                                    </Typography>
                                                    <Typography style={{ fontSize: "13px",color: colorSelector ? "white" : "black" }}>
                                                        {moment(items.date).format('ll')}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                        <Divider component="li" />
                                    </>
                                })
                            }
                        </List>
                        <Typography color="primary" style={{ marginTop: "20px",color: colorSelector ? "white" : "black" }} >
                            Categories
                        </Typography>
                        {
                            categories?.map((item, key) => {
                                return <Button key={key} variant="contained" style={{
                                    color: "black", borderRadius: " 22px 22px", padding: "3px 16px",
                                    fontSize: "12px", marginTop: "10px", textTransform: "capitalize",
                                    marginLeft: "7px", marginRight: "7px",color: colorSelector ? "white" : "black"
                                }} >
                                    {item.category}
                                </Button>
                            })
                        }
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
}


export default withRouter(MediaCard);