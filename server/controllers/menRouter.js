const express = require("express");
const route = express.Router();
const Model = require("../models/menSchema");

//===============================//
//+++++++++INDEX ROUTE+++++++++++//
//===============================//
route.get("/", async (req, res) => {
  try {
    const foundItems = await Model.find({});
    res.status(200).json(foundItems);
  } catch (error) {
    req.status(400).json(error);
  }
});

//===============================//
//+++++++++DELETE ROUTE++++++++++//
//===============================//
route.delete("/:id", async (req, res) => {
  try {
    const deleteItems = await Model.findByIdAndRemove(req.params.id);
    res.status(200).json(deleteItems);
  } catch (error) {
    res.status(400).json(error);
  }
});

//===============================//
//+++++++++UPDATE ROUTE++++++++++//
//===============================//
route.put("/:id", async (req, res) => {
  try {
    const updateItems = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateItems);
  } catch (error) {
    res.status(400).json(error);
  }
});

//===============================//
//+++++++++CREATE ROUTE++++++++++//
//===============================//
route.post("/", async (req, res) => {
  try {
    const createItems = await Model.create(req.body);
    res.status(200).json(createItems);
  } catch (error) {
    res.status(400).json(error);
  }
});

//===============================//
//++++++++++SHOW ROUTE+++++++++++//
//===============================//
route.get("/:id", async (req, res) => {
  try {
    const findItems = await Model.findById(req.params.id);
    res.status(200).json(findItems);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = route;
