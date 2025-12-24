const express = require("express");
const router = express.Router();
const { getDB } = require("../config/db"); // adjust path if needed

const empCollection = () => getDB().collection("empData");

router.get("/", async (req, res) => {
  try {
    const employees = await empCollection().find().toArray();

    res.status(200).send({
      isError: false,
      message: "Employee fetched successfully",
      data: employees
    });
  } catch (error) {
    res.status(500).send({
      isError: true,
      message: "Employee not fetched successfully",
      data: null
    });
  }
});
router.post("/add-employee", async (req, res) => {
  try {
    const result = await empCollection().insertOne(req.body);

    res.status(201).send({
      isError: false,
      message: "Employee added successfully",
      data: result
    });
  } catch (error) {
    res.status(500).send({
      isError: true,
      message: "Employee not added successfully",
      data: null
    });
  }
});
const { ObjectId } = require("mongodb");

router.put("/edit-employee/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const result = await empCollection().updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );

    
    res.status(200).send({
      isError: false,
      message: "Employee updated successfully",
      data: result
    });
  } catch (error) {
    res.status(500).send({
      isError: true,
      message: "Employee not updated successfully",
      data: null
    });
  }
});

module.exports = router;
