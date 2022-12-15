const express = require("express");
const BookmarkModel = require("../schema/bookmar.schema");

const bookmarkController = express.Router();

bookmarkController.post("/addBookmark", async (req, res) => {
const { itemTitle, quantity, priority, description, dateTime } = req.body;
const new_item = new BookmarkModel({
itemTitle,
quantity,
priority,
description,
dateTime,

});
await new_item.save();
res.send({ message: "Item Created Successfully", item: new_item });
});

bookmarkController.get("/", async (req, res) => {

const items = await BookmarkModel.find({});
return res.send(items);
});

module.exports=bookmarkController