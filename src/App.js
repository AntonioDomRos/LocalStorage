import { useEffect, useState } from 'react';
import './App.css';
import { Container } from './components/Container';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';

function App() {
	const [tasksItems, setTasksItems] = useState([]);

	const [showCompleted, setShowCompleted] = useState(false);

	function createNewTask(taskName) {
		if (!tasksItems.find((task) => task.name === taskName)) {
			setTasksItems([...tasksItems, { name: taskName, done: false }]);
		}
	}

	useEffect(() => {
		const data = localStorage.getItem('tasks');
		if (data) {
			setTasksItems(JSON.parse(data));
		}
	}, []);

	const toggleTask = (task) => {
		setTasksItems(
			tasksItems.map((t) =>
				t.name === task.name ? { ...t, done: !t.done } : t
			)
		);
	};

	const clearTask = () => {
		setTasksItems(tasksItems.filter((task) => !task.done));
		setShowCompleted(false);
	};

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasksItems));
	}, [tasksItems]);

	return (
		<main className="bg-dark vh-100 text-white">
			<Container>
				<TaskCreator createNewTask={createNewTask} />
				<TaskTable tasks={tasksItems} toggleTask={toggleTask} />
				<VisibilityControl
					isChecked={showCompleted}
					setShowCompleted={(checked) => setShowCompleted(checked)}
					clearTask={clearTask}
				/>
				{showCompleted === true && (
					<TaskTable
						tasks={tasksItems}
						toggleTask={toggleTask}
						showCompleted={showCompleted}
					/>
				)}
			</Container>
		</main>
	);
}

export default App;
