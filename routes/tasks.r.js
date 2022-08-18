const express = require("express");
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getSingleTasks,
} = require("../controllers/tasks.c");
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTasks).patch(updateTask).delete(deleteTask);

module.exports = router;
