const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/',(req,res)=>{
    const tasks = taskController.getAllTask();
    res.status(200).json(tasks);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = taskController.getTaskById(id);
    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

router.post('/',(req,res)=>{
    const {title,description} = req.body;
    const newTask = taskController.createTask(title,description);
    res.status(200).json(newTask);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    const updatedTask = taskController.updateTaskById(id, updatedData);
    if (updatedTask) {
        res.status(200).json({ message: 'Tarea actualizada', task: updatedTask });
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id); // Convertir a número entero
    const deletedTask = taskController.deleteTaskById(id);
    if (deletedTask) {
        res.status(200).json({ message: 'Tarea eliminada', task: deletedTask });
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});
5
module.exports = router;

