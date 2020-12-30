import { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
// import { updateSettings } from "./../api/axios.utils";
import { renderTextField } from "./../components/form/material-ui.form";
import {
  selectUserProfile,
  selectUserProfileToken,
} from "./../redux/user/user.selectors";
import { updateMyProfileStart } from "./../redux/user/user.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 1000,

    [theme.breakpoints.up("md")]: {
      paddingRight: 240,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      //flexDirection: "row",
    },
  },

  footer: {
    [theme.breakpoints.up("md")]: {
      //minWidth: `calc(100% - 240px)`,
      width: "100%",
    },
    width: "100%",
    flexDirection: "row",
    display: "flex",
    backgroundColor: "#120e1f",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },

  CardHeaderTitle: {
    fontSize: 20,
  },
  action: {
    alignSelf: "center",
  },
}));

const ProfilePage = ({ user, token, handleSubmit, updateMyProfileStart }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const classes = useStyles();

  const onSubmit = (values) => {
    updateMyProfileStart(values, token);
  };

  return (
    <Fragment>
      <Box
        className={classes.root}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box
          width={matches ? "60%" : "90%"}
          mb={2.4}
          flexDirection="column"
          flexGrow={1}
        >
          {/*//////////////////TITLE///////////////// */}
          <Box className={classes.Container}>
            <Card>
              <CardHeader
                classes={{ action: classes.action }}
                avatar={
                  <Avatar
                  //alt={user.name}
                  // src={`img/users/${user.photo}`}
                  />
                }
                action={
                  <Fragment>
                    <Button
                      variant="outlined"
                      color="secondary"
                      style={{ marginLeft: 10 }}
                    >
                      اپلود عکس
                    </Button>
                    <Button variant="outlined" color="secondary">
                      حذف عکس
                    </Button>
                  </Fragment>
                }
              />
              <Divider />

              <CardContent>
                <Box
                  flexDirection="row"
                  display="flex"
                  justifyContent="center"
                  mt={2}
                >
                  <Box width="50%" ml={2}>
                    <Field
                      component={renderTextField}
                      fullWidth={true}
                      variant="outlined"
                      type="text"
                      name="name"
                      label="نام"
                      placeholder={user.name}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                  <Box width="50%" mr={2}>
                    <Field
                      component={renderTextField}
                      fullWidth={true}
                      variant="outlined"
                      type="text"
                      name="lastName"
                      label="نام خانوادگی"
                      placeholder={user.lastName}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  flexDirection="row"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={2}
                >
                  <Box width="100%">
                    <Field
                      component={renderTextField}
                      fullWidth={true}
                      variant="outlined"
                      type="email"
                      name="email"
                      label="ایمیل"
                      placeholder={user.email}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
          {/*///////////SUBMIT FOOTER //////////////*/}
        </Box>
        <Box className={classes.footer} mt={3}>
          <Box mr={2}>
            <Typography variant="subtitle2" color="primary" align="center">
              کالا ذخیره نشده است
            </Typography>
          </Box>
          <Box flexDirection="row" display="flex">
            <Box ml={2}>
              <Button variant="contained" color="primary">
                ذخیره نشود
              </Button>
            </Box>
            <Box ml={2}>
              <Button variant="contained" color="secondary" type="submit">
                ذخیره شود
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

const validate = (formValues) => {
  const errors = {};

  return errors;
};

const mapStateToProps = createStructuredSelector({
  user: selectUserProfile,
  token: selectUserProfileToken,
});
const mapDispatchToProps = (dispatch) => ({
  updateMyProfileStart: (values, token) =>
    dispatch(updateMyProfileStart({ values, token })),
});

export default reduxForm({
  validate,
  form: "myProfile",
})(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
