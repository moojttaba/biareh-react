//////////////////////////////////////////// React - Redux
import { lazy, Suspense, Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUserStatus } from "./redux/user/user.selectors";
//////////////////////////////////////////// styles
import theme from "./styles/theme.jsx";
import { ThemeProvider } from "@material-ui/core/styles";
//////////////////////////////////////////// Route
import { Route, Switch } from "react-router-dom";
//////////////////////////////////////////// COMPONENTS
import Spinner from "./components/spinner.component";
import Header from "./layouts/header.layouts";
// import HeaderSaveProduct from "./layouts/HeaderSaveProduct.layouts";

//////////////////////////////////////////// PAGES
const HomePage = lazy(() => import("./pages/home.page"));
const ProductsPage = lazy(() => import("./pages/products.page"));
const ProductsAddPage = lazy(() => import("./pages/productAdd.BACKUP"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-up-and-sign-in.page")
);
const ProfilePage = lazy(() => import("./pages/profile.page"));

const App = ({ isAuthenticated }) => {
  console.log(isAuthenticated);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        {isAuthenticated === "success" ? (
          <Suspense fallback={<Spinner />}>
            <Header />
            <Switch>
              <Route exact path="/admin" component={HomePage} />
              <Route exact path="/admin/products" component={ProductsPage} />
              <Route
                exact
                path="/admin/products/new"
                component={ProductsAddPage}
              />
              <Route exact path="/admin/Profile" component={ProfilePage} />
            </Switch>
          </Suspense>
        ) : (
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={SignInAndSignUpPage} />
          </Suspense>
        )}
      </Fragment>
    </ThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectCurrentUserStatus,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
