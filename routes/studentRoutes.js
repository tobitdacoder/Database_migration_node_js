const express = require("express");
const router = express.Router();
const { Student } = require("../models");
const student = require("../models/student");

// create student
router.post("/", async (req, res) => {
    const student = await Student.create(req.body);
    res.status(201).json(student);
});

// Get all students
router.get("/", async (req, res) => {
    const students = await Student.findAll();
    res.json(students);
});

// Get  student by ID
router.get("/:id", async (req, res) => {
    const student = await Student.findByPk(req.params.id);
    res.json(student);
});

// Update student
router.put("/:id", async (req, res) => {
    await Student.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Updated successfully" });
});

// Delete student
router.delete("/:id", async (req, res) => {
    await Student.destroy({ where: {id: req.params.id}});
    res.status(204).send();
});

module.exports = router;
