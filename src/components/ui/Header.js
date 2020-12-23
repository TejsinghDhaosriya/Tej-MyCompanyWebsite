import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import logo from "../../assets/logo.svg";

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

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1.5em", //upper toolbar se kitne space chodna
  },
  logo: {
    marginLeft: "7rem",
    height: "5.4rem",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto", //sabko right size bhej dega
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10, //tab ke bitch distance kum kardeta
    marginLeft: "25px", //distance in pixel bec. we want different in different devices
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px", //4ro tarf de cure kara,
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleChange = (e, value) => {
    setValue(value);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1)
      setValue(1);
    else if (window.location.pathname === "/revolution" && value !== 2)
      setValue(2);
    else if (window.location.pathname === "/about" && value !== 3) setValue(3);
    else if (window.location.pathname === "/contact" && value !== 4)
      setValue(4);
    else if (window.location.pathname === "/estimate" && value !== 5)
      setValue(5);
  }, [value]);
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters={true} className={classes.logo}>
            <Button
              disableRipple
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              className={classes.logoContainer}
            >
              {" "}
              {/*disableRipple logo mein click ke waqt color change nahi hone deta*/}
              <img alt="company logo" src={logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicateColor="primary"
            >
              {" "}
              {/*indicateColor bottom tab color remove kar rha*/}
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                className={classes.tab}
                component={Link}
                onMouseOver={(event) => handleClick(event)}
                to="/services"
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Free Estimate
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{onMouseLeave:handleClose}}
              >
                <MenuItem onClick={handleClose}>Custom Software</MenuItem>
                <MenuItem onClick={handleClose}>
                  Mobile App Developement
                </MenuItem>
                <MenuItem onClick={handleClose}>Website Developement</MenuItem>
              </Menu>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/*vo button tag hide ho gye tha use show kar rha ,push kar rha jo content chup gya tha*/}
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
