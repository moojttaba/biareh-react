import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { ReactComponent as ProductSVG } from "./../assets/product.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  homePageStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      paddingRight: 240,
      margin: theme.spacing(3),
    },
  },
  Box: {
    width: "100%",
    display: "flex",
  },
  paper: {
    display: "flex",
    //justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",

    width: "100%",
    height: theme.spacing(60),
  },
}));

const ProductPage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.homePageStyles}>
        <Box flexGrow={1} className={classes.Box}>
          <Box flexGrow={1}>
            <Typography variant="h4" align="right">
              کالاها
            </Typography>
          </Box>
          <Box>
            <Button>ورود اطلاعات</Button>
          </Box>
        </Box>
        <Box className={classes.Box} flexGrow={1} mt={2}>
          <Paper elevation={3} className={classes.paper}>
            <Box mt={2}>
              <ProductSVG />
            </Box>
            <Box mt={2}>
              <Typography variant="h6">
                محصولات خود را اضافه و مدیریت کنید
              </Typography>
            </Box>
            <Box mt={1} width={300}>
              <Typography variant="body1" align="justify">
                اینجاست که محصولات را اضافه می کنید و قیمت گذاری خود را مدیریت
                می کنید. همچنین می توانید موجودی محصول خود را وارد و صادر کنید.
              </Typography>
            </Box>

            <Box display="flex" mt={3}>
              <Box>
                <Button variant="contained" color="primary">
                  پیدا کردن کالا
                </Button>
              </Box>

              <Box mr={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to="/admin/products/new"
                >
                  اضافه کردن کالا
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Fragment>
  );
};

export default ProductPage;
