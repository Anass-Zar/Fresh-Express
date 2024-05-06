import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import adminRouter from "./routes/admin_route.js";
import productsRouter from "./routes/products_route.js";
import requestsRouter from "./routes/requests_route.js";
///////////////////////
import path from "path"

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

///////////////////////////////
const __dirname = path.resolve();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB connection is successful"))
  .catch((err) =>
    console.log("There is a problem in MongoDB connection =>", err)
  );

app.use("/api/admin", adminRouter);
app.use("/api/products", productsRouter);
app.use("/api/requests", requestsRouter);

//////////////////////////////////////////////////////////
app.use(express.static(path.join(__dirname, '/frontend/dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});