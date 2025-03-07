'use strict';

const express = require('express');
const { Sequelize } = require('sequelize');
const studentRoutes = require('./routes/studentRoutes'); // Correct path for student routes
const courseRoutes = require('./routes/courseRoutes');   // Correct path for course routes
const teacherRoutes = require('./routes/teacherRoutes'); // Correct path for teacher routes

// 1. Create an Express app
const app = express();

// 2. Set up middleware
app.use(express.json()); // For parsing JSON request bodies

// 3. Use routes
app.use('/students', studentRoutes);  // Use student routes
app.use('/courses', courseRoutes);    // Use course routes
app.use('/teachers', teacherRoutes);  // Use teacher routes

// 4. Connect to the database
const sequelize = new Sequelize('school_db', 'root', 'mysql@101299', {
  host: 'localhost',
  dialect: 'mysql', // or 'postgres', 'sqlite', etc.
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// 5. Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the School API!');
});

// 6. Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
