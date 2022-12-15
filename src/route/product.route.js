const express = require("express");
const Product = require("../schema/product.schema");

const productController = express.Router();

productController.post("/addProduct", async (req, res) => {
const { itemTitle, quantity, priority, description} = req.body;
dateTime = new Date();
const new_item = new Product({
itemTitle,
quantity,
priority,
description,
dateTime,
});
await new_item.save();
res.send({ message: "Product Created Successfully", item: new_item });
});

productController.get("/", async (req, res) => {
const items = await Product.find({});
return res.send(items);
});

productController.delete("/:itemID/delete", async (req, res) => {
const itemId = req.params.itemID;
console.log(itemId);
const item = await Product.findOne({ _id: itemId });
console.log(item);
const deleted_item = await Product.findOneAndDelete(
{ _id: itemId },
{ new: true }
);
return res.send({ message: "Successfully deleted", item: deleted_item });

});

module.exports = productController;