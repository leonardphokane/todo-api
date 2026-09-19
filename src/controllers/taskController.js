let tasks = require('../models/taskModel');

exports.getAllTasks = (req, res) => res.json(tasks);

exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  task ? res.json(task) : res.status(404).json({ error: `Task ${req.params.id} not found` });
};

exports.createTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });
  const task = { id: tasks.length + 1, title, done: false };
  tasks.push(task);
  res.status(201).json(task);
};

exports.updateTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Task not found" });
  const { title, done } = req.body;
  if (!title && done === undefined) return res.status(400).json({ error: "Invalid body" });
  tasks[index] = { id: Number(req.params.id), title: title || tasks[index].title, done: done ?? tasks[index].done };
  res.json(tasks[index]);
};

exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Task not found" });
  tasks.splice(index, 1);
  res.status(204).send();
};
