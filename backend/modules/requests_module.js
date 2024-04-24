import mongoose from "mongoose";
const { Schema, Types: { ObjectId } } = mongoose;

const RequestsSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "waiting"
  },
  order: {
    type: Array
  }
}, { timestamps: true });

const Requests = mongoose.model("Requests", RequestsSchema);
export default Requests;
