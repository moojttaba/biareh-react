import { Fragment } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { switchSignUpSignIn, signUpStart } from "../redux/user/user.actions";
import { renderTextField } from "./../components/form/material-ui.form";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    minWidth: 400,
  },
}));

const SignUp = ({ signUpStart, switchSignUpSignIn, handleSubmit }) => {
  const classes = useStyles();

  const onSubmit = ({ name, email, password, passwordConfirm }) => {
    signUpStart(name, email, password, passwordConfirm);
  };

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Grid container spacing={2} direction="column" justify="center">
          <Grid
            item
            container
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            spacing={4}
            direction="column"
          >
            <Grid item>
              <Field
                component={renderTextField}
                fullWidth={true}
                variant="outlined"
                type="text"
                name="name"
                label="نام کاربر"
                required
              />
            </Grid>
            <Grid item>
              <Field
                component={renderTextField}
                fullWidth={true}
                variant="outlined"
                type="text"
                name="email"
                label="ایمیل"
                required
              />
            </Grid>
            <Grid item>
              <Field
                component={renderTextField}
                fullWidth={true}
                variant="outlined"
                type="password"
                name="password"
                label="رمز عبور"
                required
              />
            </Grid>
            <Grid item>
              <Field
                component={renderTextField}
                fullWidth={true}
                variant="outlined"
                type="password"
                name="passwordConfirm"
                label="تایید رمز عبور"
                required
              />
            </Grid>

            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth={true}
                size="large"
              >
                ثبت نام
              </Button>
            </Grid>

            <Grid item container direction="row">
              <Grid item container justify="center" alignItems="center">
                <Typography variant="body2" color="textSecondary" component="p">
                  آیا اکانت دارید؟
                  <Button color="primary" onClick={switchSignUpSignIn}>
                    ورود
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "you must begozii";
  }

  if (!formValues.email) {
    errors.email = "you must berini email";
  }

  if (!formValues.password) {
    errors.password = "you must berini password";
  }

  if (!formValues.passwordConfirm) {
    errors.passwordConfirm = "you must berini cpaswword";
  }

  return errors;
};


const mapDispatchToProps = (dispatch) => ({
  switchSignUpSignIn: () => dispatch(switchSignUpSignIn()),
  signUpStart: (name, email, password, passwordConfirm) =>
    dispatch(signUpStart({ name, email, password, passwordConfirm })),
});

export default reduxForm({
  validate,
  form: "SignUpWithEmailAndPassword",
})(connect(null, mapDispatchToProps)(SignUp));
