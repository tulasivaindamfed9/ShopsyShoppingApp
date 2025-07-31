// importin mongoose
const mongoose = require("mongoose");
// defining schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
    enum: ["men's clothing", "women's clothing", "jewelery", "electronics"], // Only allow these categories
  },
  image: {
    type: String,
    required: true,
  },
   rating: {
    rate: {
      type: Number,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      min: 0
    }}
});

// defining modal
//  make sure your collection in MongoDB is named products (all lowercase).

// You could also explicitly specify the collection name as third parameter shown below
const Products = mongoose.model('Products', productSchema,'products');
module.exports = Products;