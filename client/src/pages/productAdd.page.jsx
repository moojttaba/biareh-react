import { useState, Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Divider from "@material-ui/core/Divider";
import {
  CustomizedTextField,
  BootstrapInput,
} from "./../components/custom-textField.component";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",

    [theme.breakpoints.up("md")]: {
      paddingRight: 240,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      //flexDirection: "row",
    },
  },
  Container: {
    marginTop: 24,
    maxWidth: 700,
    margin: "auto",
    [theme.breakpoints.up("md")]: {},
  },

  footer: {
    [theme.breakpoints.up("md")]: {
      minWidth: `calc(100% - 240px)`,
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
}));

const HomePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const [state, setState] = useState({
    trackQuantity: false,
    ContinueSellingWhenOutOfStock: false,
    ThisIsAPhysicalProduct: false,
    thisProductHasMultipleOptions: false,
  });

  const classes = useStyles();
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    salePrice: "",
    imageLink: "",
    SKU: "",
    gtin: "",
    availability: "",
    shippingWeight: "",
    shippingWeightUnit: "",
    Option1Name: "",
    Option1Value: "",
    productStatus: "",
    productType: "",
    vendor: "",
    collections: "",
  });

  const {
    title,
    description,
    price,
    salePrice,
    imageLink,
    SKU,
    gtin,
    availability,
    shippingWeight,
    shippingWeightUnit,
    Option1Name,
    Option1Value,
    productStatus,
    productType,
    vendor,
    collections,
  } = productData;

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "/api/v1/products",
      data: {
        title,
        description,
        price,
        salePrice,
        imageLink,
        SKU,
        gtin,
        availability,
        shippingWeight,
        shippingWeightUnit,
        Option1Name,
        Option1Value,
        productStatus,
        productType,
        vendor,
        collections,
      },
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProductData({ ...productData, [name]: value });
  };

  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const InvQuantity = (
    <Fragment>
      <Box mb={2}>
        <Box mb={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.ContinueSellingWhenOutOfStock}
                onChange={handleChangeCheckbox}
                name="ContinueSellingWhenOutOfStock"
                //color="secondary"
              />
            }
            label="ادامه فروش بعد از اتمام"
          />
        </Box>
      </Box>

      <Divider variant="fullWidth" />
      <CardHeader subheader="تعداد" />
      <Box flexDirection="row" display="flex" justifyContent="flex-start">
        <Box width="50%" ml={2}>
          <CustomizedTextField
            fullWidth={true}
            variant="outlined"
            type="text"
            name="availability"
            value={availability}
            onChange={handleChange}
            label="موجودی"
            required
          />
        </Box>
      </Box>
    </Fragment>
  );

  const ShipingWeight = (
    <Fragment>
      <Divider variant="fullWidth" />
      <CardHeader subheader="وزن" />
      <Box flexDirection="row" display="flex" alignItems="center">
        <Box>
          <CustomizedTextField
            //fullWidth={true}
            variant="outlined"
            type="text"
            name="shippingWeight"
            value={shippingWeight}
            onChange={handleChange}
            label="وزن"
            required
          />
        </Box>

        <Box mr={2}>
          <FormControl>
            <InputLabel id="shiping-weight-select-label" />
            <Select
              labelId="shiping-weight-select-label"
              id="shiping-weight-select"
              value={shippingWeightUnit}
              onChange={handleChange}
              input={<BootstrapInput />}
              name="shippingWeightUnit"
            >
              <MenuItem value={"g"}>کیلوگرم</MenuItem>
              <MenuItem value={"kg"}>گرم</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Fragment>
  );

  const Variant = (
    <Fragment>
      <Divider variant="fullWidth" />
      <CardHeader subheader="گزینه ها" />
      <Box flexDirection="row" display="flex" alignItems="center">
        <Box ml={2}>
          <FormControl>
            <InputLabel id="variant-select-label" />
            <Select
              labelId="variant-select-label"
              id="variant-select"
              value={Option1Name}
              name="Option1Name"
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value={"size"}>اندازه</MenuItem>
              <MenuItem value={"color"}>رنگ</MenuItem>
              <MenuItem value={"material"}>جنس</MenuItem>
              <MenuItem value={"style"}>مدل</MenuItem>
              <MenuItem value={"title"}>نام</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <CustomizedTextField
            //fullWidth={true}
            variant="outlined"
            type="text"
            name="Option1Value"
            value={Option1Value}
            onChange={handleChange}
            label="گزینه اول"
            placeholder="با کما جد اکنید"
            required
          />
        </Box>
      </Box>
    </Fragment>
  );

  return (
    <Fragment>
      <Box className={classes.root} component="form" onSubmit={handleSubmit}>
        <Box width={matches ? "60%" : "90%"} mb={2.4} flexDirection="column">
          {/*//////////////////TITLE///////////////// */}
          <Box className={classes.Container}>
            <Card>
              <CardHeader
                title="نام کالا"
                classes={{
                  title: classes.CardHeaderTitle,
                }}
              />
              <CardContent>
                <Box mt={-2}>
                  <CustomizedTextField
                    fullWidth={true}
                    variant="outlined"
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    label="نام کالا"
                    required
                  />
                </Box>
                <Box mt={2}>
                  <CustomizedTextField
                    fullWidth={true}
                    variant="outlined"
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    label="توضیحات کالا"
                    required
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>
          {/*//////////////////IMAGE///////////////// */}
          <Box className={classes.Container}>
            <Card>
              <CardHeader
                title="عکس"
                classes={{
                  title: classes.CardHeaderTitle,
                }}
              />
              <CardContent>
                <Box mt={2}>
                  <CustomizedTextField
                    fullWidth={true}
                    variant="outlined"
                    type="text"
                    name="imageLink"
                    value={imageLink}
                    onChange={handleChange}
                    label="لینک عکس"
                    required
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>
          {/*//////////////////PRICE///////////////// */}
          <Box className={classes.Container}>
            <Card>
              <CardHeader
                title="قیمت"
                classes={{
                  title: classes.CardHeaderTitle,
                }}
              />
              <CardContent>
                <Box flexDirection="row" display="flex" justifyContent="center">
                  <Box width="50%" ml={2}>
                    <CustomizedTextField
                      fullWidth={true}
                      variant="outlined"
                      type="Number"
                      name="price"
                      value={price}
                      onChange={handleChange}
                      label="قیمت"
                      required
                    />
                  </Box>
                  <Box width="50%" mr={2}>
                    <CustomizedTextField
                      fullWidth={true}
                      variant="outlined"
                      type="Number"
                      name="salePrice"
                      value={salePrice}
                      onChange={handleChange}
                      label="قیمت با تخفیف"
                      required
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
          {/*//////////////////INVENTORY///////////////// */}
          <Box className={classes.Container}>
            <Card>
              <CardHeader
                title="انبار"
                classes={{
                  title: classes.CardHeaderTitle,
                }}
              />
              <CardContent>
                <Box
                  flexDirection="row"
                  display="flex"
                  justifyContent="center"
                  mb={3}
                >
                  <Box width="50%" ml={2}>
                    <CustomizedTextField
                      fullWidth={true}
                      variant="outlined"
                      type="text"
                      name="SKU"
                      value={SKU}
                      onChange={handleChange}
                      label="واحد نگهداری در انبار"
                      required
                    />
                  </Box>
                  <Box width="50%" mr={2}>
                    <CustomizedTextField
                      fullWidth={true}
                      variant="outlined"
                      type="text"
                      name="gtin"
                      value={gtin}
                      onChange={handleChange}
                      label="شماره کالا"
                      required
                    />
                  </Box>
                </Box>
                <Box mb={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.trackQuantity}
                        onChange={handleChangeCheckbox}
                        name="trackQuantity"
                      />
                    }
                    label="پیگیری موجودی"
                  />
                </Box>

                {state.trackQuantity ? InvQuantity : null}
              </CardContent>
            </Card>
          </Box>
          {/*//////////////////SHIPING///////////////// */}
          <Box className={classes.Container}>
            <Card>
              <CardHeader
                title="ارسال کالا"
                classes={{
                  title: classes.CardHeaderTitle,
                }}
              />

              <CardContent>
                <Box mb={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.ThisIsAPhysicalProduct}
                        onChange={handleChangeCheckbox}
                        name="ThisIsAPhysicalProduct"
                      />
                    }
                    label="این کالا فیزیکی می باشد"
                  />
                </Box>
                {state.ThisIsAPhysicalProduct ? ShipingWeight : null}
              </CardContent>
            </Card>
          </Box>
          {/*//////////////////VARIENT///////////////// */}
          <Box className={classes.Container}>
            <Card>
              <CardHeader
                title="های  گزینه های کالا"
                classes={{
                  title: classes.CardHeaderTitle,
                }}
              />
              <CardContent>
                <Box mb={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.thisProductHasMultipleOptions}
                        onChange={handleChangeCheckbox}
                        name="thisProductHasMultipleOptions"
                      />
                    }
                    label="این محصول دارای چندین گزینه است ، مانند اندازه ها یا رنگ های مختلف"
                  />
                </Box>
                {state.thisProductHasMultipleOptions ? Variant : null}
              </CardContent>
            </Card>
          </Box>
          {/*//////////////////SEO//////////////// */}
          <Box className={classes.Container}>
            <Card>
              <CardHeader
                title="جستجو"
                classes={{
                  title: classes.CardHeaderTitle,
                }}
              />
              <CardContent></CardContent>
            </Card>
          </Box>
          {/*//////////////////product state///////////////// */}
          <Box className={classes.Container}>
            <Card>
              <CardHeader
                title="وضعیت محصول"
                classes={{
                  title: classes.CardHeaderTitle,
                }}
              />
              <CardContent>
                <Box ml={2}>
                  <FormControl>
                    <InputLabel id="productStatus-select-label" />
                    <Select
                      labelId="productStatus-select-label"
                      id="productStatus-select"
                      value={productStatus}
                      name="productStatus"
                      onChange={handleChange}
                      input={<BootstrapInput />}
                    >
                      <MenuItem value={"active"}>فعال</MenuItem>
                      <MenuItem value={"draft"}>غیر فعال</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </CardContent>
            </Card>
          </Box>
          {/*//////////////////organizetion///////////////// */}
          <Box className={classes.Container}>
            <Card>
              <CardHeader
                title="دسته بندی"
                classes={{
                  title: classes.CardHeaderTitle,
                }}
              />
              <CardContent>
                <Box
                  flexDirection="row"
                  display="flex"
                  justifyContent="center"
                  mb={3}
                >
                  <Box width="50%" ml={2}>
                    <CustomizedTextField
                      fullWidth={true}
                      variant="outlined"
                      type="text"
                      name="productType"
                      value={productType}
                      onChange={handleChange}
                      label="نوع کالا"
                      required
                    />
                  </Box>
                  <Box width="50%" mr={2}>
                    <CustomizedTextField
                      fullWidth={true}
                      variant="outlined"
                      type="text"
                      name="vendor"
                      value={vendor}
                      onChange={handleChange}
                      label="فروشنده"
                      required
                    />
                  </Box>
                </Box>
                <Divider variant="fullWidth" />
                <CardHeader subheader="مجموعه ها" />
                <Box ml={2}>
                  <FormControl>
                    <InputLabel id="collections-select-label" />
                    <Select
                      labelId="collections-select-label"
                      id="collections-select"
                      value={collections}
                      name="collections"
                      onChange={handleChange}
                      input={<BootstrapInput />}
                    >
                      <MenuItem value={"Products"}>کالاها</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* FOOTER */}
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
      {/*//////////////////FOOTER///////////////// */}
    </Fragment>
  );
};

export default HomePage;



