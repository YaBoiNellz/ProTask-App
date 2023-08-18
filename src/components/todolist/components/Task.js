const Task = ({ task, toggleCompleted, deleteTask }) => {
  const label = task.completed
    ? 'show not completed'
    : 'show Completed'

  const date = new Date(task.date)

  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`

  const priorityClass = `${task.priority.toLowerCase()}`

  return (
    <div className='Task'>
      <div className = "taskName"> {task.task} </div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />

      <label>
        <div className = {'priority'}> Priority: <div className = {priorityClass}> {task.priority} </div></div>
        <p> Due date: {formattedDate} </p>
      </label>
      <p>
        <button type="submit" onClick={() => deleteTask(task.id, task.task)}>Delete Task</button>
      </p>
    </div>
  )
}

export default Task
