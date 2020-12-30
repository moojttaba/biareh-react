const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const productSchema = new mongoose.Schema({
  //////////////////////////////// Product
  title: {
    type: String,
    required: [true, 'Your product’s name'],
    unique: true,
    trim: true,
    //maxLength: [150, "A tour name must less or equal than 40 careeacter"],
    //minLength: [5, "A tour name must less or equal than 40 careeacter"],
    //validate: [validator.isDecimal, 'carecter dddds'],
    //Example :Mens Pique Polo Shirt
    //Syntax :Max 150 characters
  },

  slug: String,
  description: {
    type: String,
    required: [true, 'Your product’s description'],
    //Example : Made from 100% organic cotton, this classic red men’s polo has a slim fit and signature logo embroidered on the left chest. Machine wash cold; imported.
    //Syntax :Max 5000 characters
  },
  //   link: {
  //     type: String, //URL (including http or https), ASCII characters only, and RFC 3986 compliant
  //     required: [true, 'Your product’s landing page'],
  //     //Example :http://​www.example.​com/​asp​/sp.asp?cat=​12&id=1030
  //   },
  imageLink: {
    type: String, //URL
    required: [true, 'The URL of your product’s main image'],
    //Example :http://​www.example.​com/​image1.​jpg
  },
  //   additionalImage_link: {},
  //   mobileLink: {},
  //   //////////////////////////////// Price & availability
  availability: {
    type: String, // ItemAvailability
    // required: [true, `Your product's availability`],
    // Supported values: [in stock, out of stock, preorder]
    // Example :in stock
  },
  //   availability_date: {},
  //   costOfGoods_sold: {},
  //   expiration_date: {},
  price: {
    type: Number, // Number plus currency (use ISO 4217)
    required: [true, `Your product’s price`],
    //min: [1, 'Rating must be above 1.0'],
    //max: [100000, 'Rating must be above 1.0'],
    // Example : 15.00 USD
    // Syntax : [Numeric ,ISO 4217]
  },
  salePrice: {
    type: Number,
    validate: {
      validator: function (val) {
        return val < this.price;
      },
      message: 'below ({VALUE}) price',
    },
  },
  //   salePriceDate: {},
  //   unitPriceMeasure: {},
  //   unitPriceBase: {},
  //   installment: {},
  //   subscriptionCost: {},
  //   loyaltyPoints: {},
  //   //////////////////////////////// Product category
  //   googleProductCategory: {},
  //   productType: {},
  //   //////////////////////////////// Product identifiers
  //   brand: {
  //     type: String,
  //     required: [true, `Your product’s price`],
  //     // Example : Google
  //     // Syntax : Max 70 characters
  //     // Schema.org property : Product.brand
  //   },
  gtin: {
    type: String, //	Number (spaces and dashes are accepted, but ignored)
    required: [true, `Your product’s Global Trade Item Number (GTIN)`],
    // Example : 3234567890126
    // Syntax : Max 50 numeric characters (max 14 per value - added spaces and dashes are ignored)
    // Schema.org property : Product.gtin
  },
  //   MPN: {
  //     type: String,
  //     required: [true, `Your product’s Manufacturer Part Number (mpn)`],
  //     // Example : GO12345OOGLE
  //     // Syntax : Max 70 alphanumeric characters
  //     // Schema.org property : Product.mpn
  //   },
  //   identifierExists: {},
  //   //////////////////////////////// Detailed product description
  //   condition: {
  //     type: String,
  //     required: [true, `The condition of your product at time of sale`],
  //     // Example : new
  //     // Schema.org property : Offer.​itemCondition
  //   },
  //   adult: {
  //     type: Boolean,
  //     required: [
  //       true,
  //       `Indicate a product includes sexually suggestive content`,
  //     ],
  //     // Example : yes
  //     // Schema.org property : Offer.​itemCondition
  //     // Supported values: [yes,no]
  //   },
  //   multipack: {
  //     type: Number,
  //     required: [
  //       true,
  //       `The number of identical products sold within a merchant-defined multipack`,
  //     ],
  //     // Example : 6
  //     // Syntax : Integer
  //   },
  //   isBundle: {
  //     type: Boolean,
  //     required: [
  //       true,
  //       `Indicates a product is a merchant-defined custom group of different products featuring one main product`,
  //     ],
  //     // Example : yes
  //     // Supported values: [yes,no]
  //   },
  //   energyEfficiencyClass: {},
  //   minEnergyEfficiencyClass: {},
  //   maxEnergyEfficiencyClass: {},
  //   ageGroup: {
  //     type: String,
  //     required: [true, `The demographic for which your product is intended`],
  //     // Example : infant
  //     // Supported values: [newborn(Up to 3 months old),infant(Between 3-12 months old),toddler(Between 1-5 years old),kids(Between 5-13 years old),adult(Typically teens or older)]
  //   },
  //   color: {
  //     type: String,
  //     required: [true, `Your product’s color(s)`],
  //     // Example : Black
  //     // Syntax : Max 100 alphanumeric characters (max 40 characters per color)
  //   },
  //   gender: {
  //     type: String,
  //     required: [true, `The gender for which your product is intended`],
  //     enum: {
  //       values: ['male', 'female'],
  //       message: 'marde ya zane',
  //     },
  //     // Example : male
  //     // Supported values: [ male, female]
  //   },
  //   material: {
  //     type: String,
  //     required: [true, `Your product’s fabric or material`],
  //     // Example : leather
  //     // Syntax : Max 200 characters
  //   },
  //   pattern: {
  //     type: String,
  //     required: [true, `Your product’s pattern or graphic print`],
  //     // Example : striped,paisley
  //     // Syntax : Max 100 characters
  //   },
  //   size: {
  //     type: String,
  //     required: [true, `Your product’s size`],
  //     // Example : XL
  //     // Syntax : Max 100 characters
  //   },
  //   sizeType: {},
  //   sizeSystem: {},
  //   itemGroupId: {
  //     type: String,
  //     required: [
  //       true,
  //       `ID for a group of products that come in different versions (variants`,
  //     ],
  //     // Example : AB12345
  //     // Syntax : Max 50 alphanumeric characters
  //   },
  //   productDetail: {},
  //   productHighlight: {},
  //   //////////////////////////////// Shopping campaigns and other configurations
  //   adsRedirect: {},
  //   customLabel: {},
  //   promotionId: {},
  //   //////////////////////////////// Destinations
  //   excludedDestination: {},
  //   incloutDestination: {},
  //   shoppingAdsExcludedCountry: {},
  //   //////////////////////////////// Shipping ships_from_country
  //   shipping: {
  //     type: String,
  //     required: [
  //       true,
  //       `Your product's shipping cost and the locations your product ships to.`,
  //     ],
  //     // Example : US:CA:Overnight:16.00 USD
  //     // Syntax : shipping uses 4 sub-attributes:
  //   },
  //   shippingLabel: {},
  shippingWeight: {},
  shippingWeightUnit: {},
  trackQuantity: {},
  Option1Name: {},
  Option1Value: {},
  productStatus: {},
  productType: {},
  vendor: {},
  collections: {},

  //   shippingLength: {},
  //   shippingWidth: {},
  //   shippingHeight: {},
  //   shippingFromCountry: {},
  //   transitTimeLabel: {},
  //   maxHandlingTime: {},
  //   minHandlingTime: {},
  //   //////////////////////////////// Tax
  //   tax: {
  //     type: String,
  //     required: [true, `Your product’s sales tax rate in percent`],
  //     // Example : US:CA:5.00:y
  //     // Syntax : [rate (required)]
  //     //
  //   },
  //   taxCategory: {},
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  //   ratingsAverage: {
  //     type: Number,
  //     default: 4.5,
  //     min: [1, 'Rating must be above 1.0'],
  //     max: [5, 'Rating must be below 5.0'],
  //   },
  //   secretProduct: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  // {
  //   toJSON: { virtuals: true },
  //   toObject: { virtuals: true },

  SKU: {
    type: String,
    required: [true, `Your product’s stock keep unit`],
  },
});

// productSchema.virtual('priceToman').get(function () {
//   return this.price / 10;
// });

// // DOCUMENT MIDDLEWARE: runs before .save() and .create()
// productSchema.pre('save', function (next) {
//   this.slug = slugify(this.title, { lower: true });
//   next();
// });

// // QUERY MIDDLEWARE
// // productSchema.pre('find', function(next) {
// productSchema.pre(/^find/, function (next) {
//   this.find({ secretProduct: { $ne: true } });

//   this.start = Date.now();
//   next();
// });

// productSchema.post(/^find/, function (docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);
//   next();
// });

// // AGGREGATION MIDDLEWARE
// productSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { secretProduct: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
