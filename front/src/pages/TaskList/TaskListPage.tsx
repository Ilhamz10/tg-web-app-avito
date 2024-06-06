import { Link } from "react-router-dom"

const TaskListPage = () => {
  return (
    <div>
        <h1>Task list</h1>
        <Link to={'/add-task'}>New Task</Link>
    </div>
  )
}

export default TaskListPage