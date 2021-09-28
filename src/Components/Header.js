import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" 
     
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Layer21.png'})` ,
      height:"100px"
      }}>
     
        <Typography style={{textAlign:"center",fontSize:"30px",marginTop:"30px"}}>
            Hot Topics
          </Typography>
      </AppBar>
    </div>
  );
}