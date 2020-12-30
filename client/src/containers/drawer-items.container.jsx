import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

//import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

//import logo from "./../assets/logo.svg";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import HomeIcon from "@material-ui/icons/Home";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import TimelineIcon from "@material-ui/icons/Timeline";
import TvIcon from "@material-ui/icons/Tv";
import AppsIcon from "@material-ui/icons/Apps";
import LabelOffIcon from "@material-ui/icons/LabelOff";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import StorefrontTwoToneIcon from "@material-ui/icons/StorefrontTwoTone";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SettingsIcon from "@material-ui/icons/Settings";

import { connect } from "react-redux";
import {
  toggleOrder,
  toggleProducts,
  toggleAnalytics,
  toggleMarketing,
  toggleStore,
} from "../redux/ui/ui.actions";
import { createStructuredSelector } from "reselect";
import {
  selectDrawerAnalysis,
  selectDrawerOrders,
  selectDrawerProducts,
  selectDrawerMarketing,
  selectDrawerStore,
} from "./../redux/ui/ui.selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  ListItemChild: {
    paddingRight: theme.spacing(9),
    color: theme.palette.grey[500],
  },
  channel: {
    paddingRight: theme.spacing(3),
    color: theme.palette.grey[500],
  },
  Store: {
    paddingRight: theme.spacing(2),
  },
  selected: {
    color: "red",
  },
}));

const DrawerItems = ({
  Orders,
  Products,
  Analysis,
  Marketing,
  store,
  dispatch,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <List component="nav" className={classes.root}>
      <Box>
        {/*///////////////////// HOME ////////////////////////*/}
        <ListItem
          button
          onClick={() => {
            setValue(1);
          }}
          selected={value === 1}
          component={Link}
          to="/"
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="خانه" align="right" />
        </ListItem>
        {/*///////////////////// ORDERS ////////////////////////*/}
        <ListItem
          button
          //onClick={toggleOrder}
          onClick={() => {
            setValue(21);
            dispatch(toggleOrder());
          }}
        >
          <ListItemIcon>
            <SaveAltIcon />
          </ListItemIcon>
          <ListItemText primary="سفارش ها" align="right" />
        </ListItem>

        <Collapse in={Orders} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.ListItemChild}
              selected={value === 21}
              onClick={() => {
                setValue(21);
              }}
            >
              <ListItemText primary="سفارش ها" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(22);
              }}
              selected={value === 22}
            >
              <ListItemText primary="پیش فاکتور" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(23);
              }}
              selected={value === 23}
            >
              <ListItemText primary="سفارش های برگشتی" align="right" />
            </ListItem>
          </List>
        </Collapse>
        {/*///////////////////// PRODUCT ////////////////////////*/}
        <ListItem
          button
          onClick={() => {
            setValue(31);
            dispatch(toggleProducts());
          }}
          component={Link}
          to="/admin/products"
        >
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary="کالاها" align="right" />
        </ListItem>

        <Collapse in={Products} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(31);
              }}
              selected={value === 31}
              component={Link}
              to="/products"
            >
              <ListItemText primary="همه کالاها" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(32);
              }}
              selected={value === 32}
            >
              <ListItemText primary="انبار" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(33);
              }}
              selected={value === 33}
            >
              <ListItemText primary="ارسال" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(34);
              }}
              selected={value === 34}
            >
              <ListItemText primary="مجموعه ها" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(35);
              }}
              selected={value === 35}
            >
              <ListItemText primary="کارت های هدیه" align="right" />
            </ListItem>
          </List>
        </Collapse>
        {/*///////////////////// CUSTOMERS ////////////////////////*/}

        <ListItem
          button
          onClick={() => {
            setValue(41);
          }}
          selected={value === 41}
        >
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary="مشتری ها" align="right" />
        </ListItem>
        {/*///////////////////// ANALISE ////////////////////////*/}

        <ListItem
          button
          onClick={() => {
            setValue(51);
            dispatch(toggleAnalytics());
          }}
        >
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary="تحلیل ها" align="right" />
        </ListItem>

        <Collapse in={Analysis} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(51);
              }}
              selected={value === 51}
            >
              <ListItemText primary="داشبورد" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(52);
              }}
              selected={value === 52}
            >
              <ListItemText primary="گزارش ها" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(53);
              }}
              selected={value === 53}
            >
              <ListItemText primary="نمایش زنده" align="right" />
            </ListItem>
          </List>
        </Collapse>
        {/*///////////////////// MARKETING ////////////////////////*/}

        <ListItem
          button
          onClick={() => {
            setValue(61);
            dispatch(toggleMarketing());
          }}
        >
          <ListItemIcon>
            <TvIcon />
          </ListItemIcon>
          <ListItemText primary="بازاریابی" align="right" />
        </ListItem>

        <Collapse in={Marketing} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(61);
              }}
              selected={value === 61}
            >
              <ListItemText primary="نمایش کلی" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(62);
              }}
              selected={value === 62}
            >
              <ListItemText primary="کمپین تبلیغاتی" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(63);
              }}
              selected={value === 63}
            >
              <ListItemText primary="اتوماسیون" align="right" />
            </ListItem>
          </List>
        </Collapse>
        {/*///////////////////// SELL ////////////////////////*/}

        <ListItem
          button
          onClick={() => {
            setValue(71);
          }}
          selected={value === 71}
        >
          <ListItemIcon>
            <LabelOffIcon />
          </ListItemIcon>
          <ListItemText primary="تخفیف ها" align="right" />
        </ListItem>
        {/*///////////////////// APP ////////////////////////*/}

        <ListItem
          button
          onClick={() => {
            setValue(81);
          }}
          selected={value === 81}
        >
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="اپلیکیشن" align="right" />
        </ListItem>
      </Box>

      <Box mt={3} flexGrow={1}>
        {/*///////////////////// SELL CHANELL////////////////////////*/}
        <ListItem button className={classes.channel} dense>
          <ListItemText primary="کانالهای فروش" align="right" />
          <ListItemSecondaryAction>
            <IconButton edge="end" style={{ right: 185 }}>
              <AddCircleTwoToneIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        {/*///////////////////// STORE////////////////////////*/}

        <ListItem
          button
          className={classes.Store}
          onClick={() => {
            setValue(91);
            dispatch(toggleStore());
          }}
        >
          <ListItemIcon>
            <StorefrontTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="فروشگاه" align="right" />
          <ListItemSecondaryAction>
            <IconButton edge="end" style={{ right: 185 }}>
              <VisibilityIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <Collapse in={store} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(91);
              }}
              selected={value === 91}
            >
              <ListItemText primary="ظاهر" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(92);
              }}
              selected={value === 92}
            >
              <ListItemText primary="وبلاگ" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(93);
              }}
              selected={value === 93}
            >
              <ListItemText primary="صفحه ها" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(94);
              }}
              selected={value === 94}
            >
              <ListItemText primary="فرمان" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(95);
              }}
              selected={value === 95}
            >
              <ListItemText primary="دامین" align="right" />
            </ListItem>
            <ListItem
              button
              className={classes.ListItemChild}
              onClick={() => {
                setValue(96);
              }}
              selected={value === 96}
            >
              <ListItemText primary="سرعت" align="right" />
            </ListItem>
          </List>
        </Collapse>
      </Box>
      <Box mb={2}>
        {/*///////////////////// SETTING////////////////////////*/}
        <ListItem
          button
          onClick={() => {
            setValue(100);
          }}
          selected={value === 100}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="تنظیمات" align="right" />
        </ListItem>
      </Box>
    </List>
  );
};

const mapStateToProps = createStructuredSelector({
  Analysis: selectDrawerAnalysis,
  Orders: selectDrawerOrders,
  Products: selectDrawerProducts,
  Marketing: selectDrawerMarketing,
  store: selectDrawerStore,
});

export default connect(mapStateToProps)(DrawerItems);
