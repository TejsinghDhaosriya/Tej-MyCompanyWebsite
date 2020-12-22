import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/logo.svg';
 

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  

const useStyles =makeStyles(theme=>({
  toolbarMargin:{
    ...theme.mixins.toolbar,
   // marginBottom:"3em"  upper toolbar se kitne space chodna
  },
  logo:{
    height:"5.4em"
  }
}))

export default function Header(props){
  const classes = useStyles()
  return(
    <React.Fragment>
      <ElevationScroll>
      <AppBar position="fixed">
          <Toolbar disableGutters={true} className={classes.logo}><img alt = "company logo" src={logo}/>
          </Toolbar>
      </AppBar>
      </ElevationScroll>
      //vo button tag hide ho gye tha use show kar rha ,push kar rha jo content chup gya tha
      <div className={classes.toolbarMargin}/>
      </React.Fragment>
)


}