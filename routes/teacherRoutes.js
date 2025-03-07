const express = require("express");
const router = express.Router();
const { Teacher } = require("../models");
// const teacher = require("../models/teacher");

// create teacher
router.post("/teachers", async (req, res) => {
    const teacher = await Teacher.create(req.body);
    res.status(201).json(teacher);
});

// Get all teacher
router.get("/teachers", async (req, res) => {
    const teachers = await Teacher.findAll();
    res.json(teachers);
});

// Get  teacher by ID
router.get("/teachers/:id", async (req, res) => {
    const teacher = await Teacher.findByPk(req.params.id);
    res.json(teacher);
});

// Update teacher
router.put("/teachers/:id", async (req, res) => {
    await teacher.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Updated successfully" });
});

// Delete teacher
router.delete("/teachers/:id", async (req, res) => {
    await teacher.destroy({ where: {id: req.params.id}});
    res.status(204).send();
});

module.exports = router;
