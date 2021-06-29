const express = require('express');
const taskController = require('../controllers/taskControllers');
const router = express.Router();

// task routes

router.get('/tasks', taskController.task_index);

router.post('/tasks', taskController.task_create_post);

router.get('/tasks/:_id', taskController.task_details);

router.put('/tasks/:_id', taskController.task_put);

router.delete('/tasks/:_id', taskController.task_delete);

module.exports = router;
