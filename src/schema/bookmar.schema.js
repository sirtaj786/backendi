const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
itemTitle: { type: String, required: true },
quantity: { type: String, required: true },
priority: { type: String, required: true },
description: { type: String, required: true },
dateTime: { type: String, required: true },

});

const BookmarkModel = mongoose.model("bookmark", userSchema);

module.exports = BookmarkModel;