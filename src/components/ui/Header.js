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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.7em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.2em",
    },
  },
  logo: {
    // marginLeft: "7rem",
    height: "6em",
    fontSize: "auto",
    [theme.breakpoints.down("md")]: {
      height: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3em",
    },
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: " 0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent", //hover karne pe koi color nahi aayega
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSeleted: {
    opacity: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };
  const menuOptions = [
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];
  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value != route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });

    //or
    // if (window.location.pathname === "/" && value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === "/services" && value !== 1)
    //   setValue(1);
    // else if (window.location.pathname === "/revolution" && value !== 2)
    //   setValue(2);
    // else if (window.location.pathname === "/about" && value !== 3) setValue(3);
    // else if (window.location.pathname === "/contact" && value !== 4)
    //   setValue(4);
    // else if (window.location.pathname === "/estimate" && value !== 5)
    //   setValue(5);
    // or

    // switch (window.location.pathname) {
    //   case "/":
    //     if (value !== 0) {
    //       setValue(0);
    //     }
    //     break;
    //   case "/services":
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(0);
    //     }
    //     break;
    //   case "/customsoftware":
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(1);
    //     }
    //     break;
    //   case "/mobileapps":
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(2);
    //     }
    //     break;
    //   case "/websites":
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(3);
    //     }
    //     break;
    //   case "/revolution":
    //     if (value !== 2) {
    //       setValue(2);
    //     }
    //     break;
    //   case "/about":
    //     if (value !== 3) {
    //       setValue(3);
    //     }
    //     break;
    //   case "/contact":
    //     if (value !== 4) {
    //       setValue(4);
    //     }
    //     break;
    //   case "/estimate":
    //     if (value !== 5) {
    //       setValue(5);
    //     }
    //     break;
    //   default:
    //     break;
    // }
  }, [value, menuOptions, selectedIndex, routes]);
  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {" "}
        {/*indicateColor bottom tab color remove kar rha*/}
        {routes.map((route,index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver}
          />
        ))}
       </Tabs>
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
          open={openMenu}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          classes={{ paper: classes.menu }} //{/*menu ke ander jo paper component hai use ka background white se change kar karne ke liye */}
          elevation={0} //{/* services tab click karne pe thoda displace hona , rokne ke liye */}
          keepMounted

        >
          {menuOptions.map((option, i) => (
            <MenuItem
              key={option}
              component={Link}
              to={option.link}
              classes={{ root: classes.menuItem }}
              onClick={(event) => {
                handleMenuItemClick(event, i);
                setValue(1);
                handleClose();
              }}
              selected={i === selectedIndex && value === 1}
            >
              {option.name}
            </MenuItem>
          ))}
          {/* 
                or via direct



                  <MenuItem
                  onClick={() => {
                    handleClose();
                    setValue(1);
                  }}
                  component={Link}
                  to="/services"
                  classes={{root:classes.menuItem}}
                >
                  Services
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleClose();
                    setValue(1);
                  }}
                  component={Link}
                  to="/customsoftware"
                  classes={{root:classes.menuItem}}
                >
                  Custom Software
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setValue(1);
                  }}
                  component={Link}
                  to="/mobileapps"
                  classes={{root:classes.menuItem}}
                >
                  Mobile App Developement
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setValue(1);
                  }}
                  component={Link}
                  to="/websites"
                  classes={{root:classes.menuItem}}
                >
                  Website Developement
                </MenuItem>
             
                
                
                
                */}
        </Menu>
  
    </React.Fragment>
  );
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disabalePadding>
        {routes.map(route=>(
           
          <ListItem divider button component={Link} to={route.link} selected={value === route.activeIndex} 
          key={`${route}${route.activeIndex}`}
            
          onClick={()=>{setOpenDrawer(false);setValue(route.activeIndex)}}>
            <ListItemText className={
                value === route.activeIndex
                  ? [classes.drawerItem, classes.drawerItemSeleted]
                  : classes.drawerItem }>
                {route.name}  </ListItemText>
          </ListItem>
        ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            className={classes.drawerItemEstimate}
            to="/estimate"
            selected={value === 5}
          >
            <ListItemText
              className={
                value === 4
                  ? [classes.drawerItem, classes.drawerItemSeleted]
                  : classes.drawerItem
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon}></MenuIcon>
      </IconButton>
    </React.Fragment>
  );
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
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>

            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/*vo button tag hide ho gye tha use show kar rha ,push kar rha jo content chup gya tha*/}
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
