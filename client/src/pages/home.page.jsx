import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  homePageStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      paddingRight: 340,
    },
  },
  Box: {
    width: "100%",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.homePageStyles}>
        <Box alignSelf="flex-start">
          <Typography>homePage</Typography>
        </Box>
        <Box className={classes.Box} flexGrow={1}>
          <Paper elevation={1} >
            salam
          </Paper>
        </Box>
      </Box>
    </Fragment>
  );
};

export default HomePage;
