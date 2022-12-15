const express = require("express");
const dotenv=require("dotenv");
var bodyParser = require("body-parser");
const cors=require("cors");
const dbConnect=require('./config/db');
const productController = require("./route/product.route");
const bookmarkController = require("./route/bookmar.route");
dotenv.config();
let PORT =process.env.PORT || 8080;

const app = express();
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.json());


app.get('/' , (req , res) => {
    res.send("Hello")
  })

  app.use("/product",productController)
  app.use("/bookmark",bookmarkController)

app.listen(PORT||8080, async () => {
    await dbConnect();
    console.log(`Listening on http://localhost:${PORT}`);
  });