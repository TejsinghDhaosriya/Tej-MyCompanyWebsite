import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

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
  },
  tabContainer:{
    marginLeft:'auto'  //sabko right size bhej dega
  },
  tab:{
    ...theme.typography.tab,
    minWidth:10, //tab ke bitch distance kum kardeta 
     marginLeft:"25px"//distance in pixel bec. we want different in different devices
  },
  button:{
    ...theme.typography.estimate,
    borderRadius:"50px", //4ro tarf de cure kara,
    marginLeft:"50px",
    marginRight:"25px",
    height:"45px"
  }
}))

export default function Header(props){
  const classes = useStyles()
  const [value,setValue] =useState(0)
  const handleChange = (e,value)=>{
    setValue(value);
  }
  return(
    <React.Fragment>
      <ElevationScroll>
      <AppBar position="fixed">
          <Toolbar disableGutters={true} className={classes.logo}><img alt = "company logo" src={logo}/>
          <Tabs value={value}  onChange={handleChange} className={classes.tabContainer} indicateColor="primary" > {/*indicateColor bottom tab color remove kar rha*/}
            <Tab className={classes.tab} label="Home" />
            <Tab className={classes.tab}  label="Services" />
            <Tab className={classes.tab}  label="The Revolution" />
            <Tab className={classes.tab}  label="About Us" />
            <Tab className={classes.tab}  label="Contact Us" />
          <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
          </Tabs>
  
          </Toolbar>
      </AppBar>
      </ElevationScroll>
      {/*vo button tag hide ho gye tha use show kar rha ,push kar rha jo content chup gya tha*/}
      <div className={classes.toolbarMargin}/>
      </React.Fragment>
)


}