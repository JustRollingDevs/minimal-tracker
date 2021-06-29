const task = require('../models/task');

const task_index = (req, res) => {
  task.find({}).then(function (tasks) {
    res.send(tasks);
  });
};

const task_details = (req, res, next) => {
  const id = req.params.id;
  task
    .findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

const task_put = async (req, res, next) => {
  task.findById({ _id: req.params._id }).then(function (result) {
    task
      .updateOne(
        { _id: req.params._id },
        {
          reminder: !result.reminder,
        }
      )
      .then(function (tasks) {
        res.send(tasks);
      })
      .catch(next);
  });
};

const task_create_post = (req, res, next) => {
  task
    .create(req.body) //create and save
    .then(function (task) {
      res.send(task);
    })
    .catch(next);
};

const task_delete = (req, res) => {
  const _id = req.params._id;

  task
    .findByIdAndDelete(_id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  task_index,
  task_details,
  task_put,
  task_create_post,
  task_delete,
};
