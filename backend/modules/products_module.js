import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
}, { timestamps : true});

const Products = mongoose.model("Products", ProductsSchema);
export default Products;
