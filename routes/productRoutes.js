const express = require("express");
const productController = require("./../controllers/productControllers");
const authController = require("./../controllers/authController");

const router = express.Router();

// router.param('id', tourController.checkID);

router
  .route("/top-5-cheap")
  .get(productController.aliasTopProducts, productController.getAllProducts);

router.route("/product-stats").get(productController.getProductStats);
// router.route('/monthly-plan/:year').get(productController.getMonthlyPlan);

router
  .route("/")
  .get(
    //authController.protect,
    productController.getAllProducts
  )
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    productController.createProduct
  );

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    productController.updateProduct
    )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    productController.deleteProduct
  );

module.exports = router;
