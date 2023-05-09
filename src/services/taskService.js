let tasks = [
  {
    id: 1,
    name: 'Mission 01',
    description: 'Chatbot',
    isCompleted: false,
  },
]

export const getAllTasks = () => {
  return tasks
}

export const createOneTask = (name, description) => {
  const newTask = {
    id: tasks.length + 1,
    name,
    description,
    isCompleted: false,
  }

  tasks.push(newTask)

  return newTask
}

export const getOneTask = (taskId) => {
  const matchedTask = tasks.find((t) => t.id === taskId)

  if (!matchedTask) {
    throw new Error('Task not found')
  }

  return matchedTask
}

export const deleteTask = (taskId) => {
  const matchedTask = tasks.find((t) => t.id === taskId)

  if (!matchedTask) {
    throw new Error('Task not found')
  }

  tasks = tasks.filter((t) => t.id !== taskId)
  return true
}

export const updateTask = (task) => {
  const matchedTask = tasks.find((t) => t.id === task.id)

  if (!matchedTask) {
    throw new Error('Task not found')
  }

  matchedTask.name = task.name
  matchedTask.description = task.description

  return matchedTask
}

export const updateTaskPartial = (task) => {
  const matchedTask = tasks.find((t) => t.id === task.id)

  if (!matchedTask) {
    throw new Error('Task not found')
  }

  matchedTask.name = task.name ?? matchedTask.name
  matchedTask.description = task.description ?? matchedTask.description

  return matchedTask
}
