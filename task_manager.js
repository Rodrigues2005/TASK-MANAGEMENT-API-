// app.js
const express = require('express');
const app = express();
app.use(express.json());

let tasks = [];

// Create a Task
app.post('/tasks', (req, res) => {
    const task = { id: Date.now().toString(), ...req.body, completed: false };
    tasks.push(task);
    res.status(201).send(task);
});

// Read all Tasks
app.get('/tasks', (req, res) => res.send(tasks));

// Update Task Status
app.patch('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === req.params.id);
    if (task) task.completed = req.body.completed;
    res.send(task);
});

// Delete Task
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id !== req.params.id);
    res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
