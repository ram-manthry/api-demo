import * as taskService from '../services/taskService.js'

export const getAllTasks = (req, res) => {
  const tasks = taskService.getAllTasks()
  res.send(tasks)
}

export const createOneTask = (req, res) => {
  const name = req.body.name
  const description = req.body.description

  const newTask = taskService.createOneTask(name, description)

  res.send(newTask)
}

export const getOneTask = (req, res) => {
  const taskId = parseInt(req.params.id)

  try {
    const matchedTask = taskService.getOneTask(taskId)
    res.send(matchedTask)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id)

  try {
    const hasDeleted = taskService.deleteTask(taskId)
    if (hasDeleted) {
      res.send(`Task ${taskId} deleted successfully!`)
    } else {
      res.status(500, send(`Task ${taskId} deletion failed!`))
    }
  } catch (e) {
    res.status(404).send(e)
  }
}

export const updateTask = (req, res) => {
  const taskId = parseInt(req.params.id)

  const name = req.body.name
  const description = req.body.description

  try {
    const updatedTask = taskService.updateTask({
      id: taskId,
      name,
      description,
    })
    res.send(updatedTask)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const updateTaskPartial = (req, res) => {
  const taskId = parseInt(req.params.id)

  const name = req.body.name
  const description = req.body.description

  try {
    const updatedTask = taskService.updateTaskPartial({
      id: taskId,
      name,
      description,
    })
    res.send(updatedTask)
  } catch (e) {
    res.status(404).send(e)
  }
}
