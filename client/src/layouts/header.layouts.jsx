//////////////////////////////////////////// BASS
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleDrawerHidden } from "./../redux/ui/ui.actions";
import { createStructuredSelector } from "reselect";
import { cloneElement, Fragment, useState } from "react";
import { Link } from "react-router-dom";

//////////////////////////////////////////// COMPONENTS
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {
  //fade,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "../containers/drawer.container";

//////////////////////////////////////////// ICON - IMAGE
import logo from "./../assets/logo.svg";

import { signOutStart } from "../redux/user/user.actions";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    zIndex: theme.zIndex.drawer + 1,
  },
  Toolbar: {
    justifyContent: "space-between",
  },
  grow: {
    //flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    flexGrow: 1,
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    backgroundColor: theme.palette.grey[100],
    //backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
      //backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
      maxWidth: 600,
    },
    "& input": {
      marginRight: theme.spacing(5),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  AvatarDesktop: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
  },
  AvatarMobail: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  LogoTTGR: {
    height: theme.spacing(7),
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",

    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
}));
////////////////////////////////////////////////////

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = ({ toggleDrawerHidden, signOutStart }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuCloseLogout = () => {
    setAnchorEl(null);
    signOutStart();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} component={Link} to="/admin/Profile">
        پروفایل
      </MenuItem>
      <MenuItem onClick={handleMenuCloseLogout} component={Link} to="/">
        خروج
      </MenuItem>
    </Menu>
  );

  // const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <Avatar className={classes.AvatarMobail} />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="secondary">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton aria-label="show 11 new notifications" color="inherit">
  //         <Badge badgeContent={11} color="secondary">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //   </Menu>
  // );

  return (
    <Fragment>
      <ElevationScroll>
        <Box display="flex">
          <AppBar position="fixed" className={classes.AppBar} color="secondary">
            <Toolbar className={classes.Toolbar} disableGutters>
              {matches ? (
                <Box display="flex" flexDirection="row" alignItems="center">
                  <IconButton>
                    <img
                      src={logo}
                      alt="Logo.co"
                      className={classes.LogoTTGR}
                    />
                  </IconButton>
                  <Typography variant="body2" fontSize="small">
                    گروه راشا
                  </Typography>
                </Box>
              ) : (
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawerHidden}
                >
                  <MenuIcon />
                </IconButton>
              )}

              <Box className={classes.search}>
                <Box className={classes.searchIcon}>
                  <SearchIcon />
                </Box>
                <InputBase
                  placeholder="جستجو..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </Box>

              <Box className={classes.sectionDesktop}>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar className={classes.AvatarDesktop} />
                  <Box mr={2}>
                    <Typography align="right" variant="body1">
                      مجتبی
                    </Typography>
                  </Box>
                </IconButton>
              </Box>
              <Box className={classes.sectionMobile}>
                <IconButton
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar className={classes.AvatarMobail} />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer />
        </Box>
      </ElevationScroll>

      {renderMenu}
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleDrawerHidden: () => dispatch(toggleDrawerHidden()),
  signOutStart: () => dispatch(signOutStart()),
});
const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
