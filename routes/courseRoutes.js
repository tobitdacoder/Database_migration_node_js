const express = require("express");
const router = express.Router();
const { Course } = require("../models");
// const course = require("../models/course");

// create course
router.post("/courses", async (req, res) => {
    const course = await Course.create(req.body);
    res.status(201).json(course);
});

// Get all courses
router.get("/courses", async (req, res) => {
    const courses = await Course.findAll();
    res.json(courses);
});

// Get  course by ID
router.get("/courses/:id", async (req, res) => {
    const course = await Course.findByPk(req.params.id);
    res.json(course);
});

// Update course
router.put("/courses/:id", async (req, res) => {
    await course.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Updated successfully" });
});

// Delete course
router.delete("/courses/:id", async (req, res) => {
    await course.destroy({ where: {id: req.params.id}});
    res.status(204).send();
});

module.exports = router;
