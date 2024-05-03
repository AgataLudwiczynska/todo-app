import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Task } from "./components/TaskItem";
import Tasks from "./components/Tasks";
import Form from "./components/Form";

function App() {
	const [taskList, setTaskList] = useState<Task[]>(() => {
		const list = localStorage.getItem("task-list");
		return list ? JSON.parse(list) : [];
	});

	useEffect(() => {
		localStorage.setItem("task-list", JSON.stringify(taskList));
	}, [taskList]);

	const addHandler = (name: string, description?: string) => {
		const newTask: Task = { name, description, done: false, id: uuid() };
		setTaskList((prev) => {
			return [...prev, newTask];
		});
	};

	const checkHandler = (id: string) => {
		setTaskList((prev) =>
			prev
				.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
				.sort((taskPrev, taskNext) =>
					taskPrev.done === taskNext.done ? 0 : taskNext.done ? -1 : 1
				)
		);
	};

	const deleteHandler = (id: string) => {
		setTaskList((prev) => prev.filter((task) => task.id !== id));
	};

	return (
		<>
			<nav className="navbar bg-secondary">
				<div className="container-fluid">
					<span className="navbar-brand mb-0 ms-5 text-white h1">TODO APP</span>
				</div>
			</nav>
			<div className="container-fluid row justify-content-center bg-light min-vh-100 m-0">
				<div className="col-8 row bg-white justify-content-center ">
					<div className="col-sm-11 col-md-10 col-lg-8 d-flex gap-5 pt-5 flex-column">
						<Form submitHandler={addHandler} />
						<Tasks
							taskList={taskList}
							checkHandler={checkHandler}
							deleteHandler={deleteHandler}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
