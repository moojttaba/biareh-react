import { Fragment } from "react";
/////REDUX
import { connect } from "react-redux";
import { toggleDrawerHidden } from "../redux/ui/ui.actions";

////Route
import { withRouter } from "react-router-dom";

/////Selector
import { createStructuredSelector } from "reselect";

import { selectDrawerHidden } from "../redux/ui/ui.selectors";
import DrawerList from "./drawer-items.container";

////Icons

/////Styles
import { makeStyles } from "@material-ui/core/styles";
///// Component
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";

import { Box } from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerItem: {
    textAlign: "right",
  },
  drawerItemSelected: {
    opacity: 1,
  },
  ///////drawerDesktop
  drawerDesktop: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaperDesktop: {
    width: drawerWidth,
  },
  drawerContainerDesktop: {
    overflow: "auto",
    height: "100%",
  },
  listDesktop: {
    marginTop: theme.spacing(3),
  },
}));

const DrawerCart = ({ hidden, toggleDrawerHidden }) => {
  const classes = useStyles();
  //const themee = useTheme();
  //const matches = useMediaQuery(themee.breakpoints.up("md"));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={hidden}
        onClose={toggleDrawerHidden}
        onOpen={toggleDrawerHidden}
        classes={{ paper: classes.drawer }}
        anchor="right"
      >
        <Box className={classes.list} height="100%">
          <DrawerList />
        </Box>
      </SwipeableDrawer>
      <Hidden smDown implementation="css">
        <Drawer
          className={classes.drawerDesktop}
          variant="permanent"
          classes={{
            paper: classes.drawerPaperDesktop,
          }}
          anchor="right"
        >
         
          <Toolbar />
          <div className={classes.drawerContainerDesktop}>
            <Box className={classes.listDesktop} height="95%">
              <DrawerList />
            </Box>
          </div>
        </Drawer>
      </Hidden>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectDrawerHidden,
});
const mapDispatchToProps = (dispatch) => ({
  toggleDrawerHidden: () => dispatch(toggleDrawerHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DrawerCart)
);
