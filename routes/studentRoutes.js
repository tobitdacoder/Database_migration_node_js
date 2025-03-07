const express = require("express");
const router = express.Router();
const { Student } = require("../models");
const student = require("../models/student");

// create student
router.post("/students", async (req, res) => {
    const student = await Student.create(req.body);
    res.status(201).json(student);
});

// Get all students
router.get("/students", async (req, res) => {
    const students = await Student.findAll();
    res.json(students);
});

// Get  student by ID
router.get("/students/:id", async (req, res) => {
    const student = await Student.findByPk(req.params.id);
    res.json(student);
});

// Update student
router.put("/students/:id", async (req, res) => {
    await student.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Updated successfully" });
});

// Delete student
router.delete("/students/:id", async (req, res) => {
    await student.destroy({ where: {id: req.params.id}});
    res.status(204).send();
});

module.exports = router;
