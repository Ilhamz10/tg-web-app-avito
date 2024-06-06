import WebApp from '@twa-dev/sdk';
import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TaskListPage from './pages/TaskList/TaskListPage';
import AddTaskPage from './pages/AddTask/AddTaskPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <TaskListPage />,
	},
	{
		path: '/add-task',
		element: <AddTaskPage />,
	},
]);

function App() {
	useEffect(() => {
		WebApp.ready();
	}, []);

	return <RouterProvider router={router} />;
}

export default App;
