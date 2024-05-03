import TaskItem, { Task } from "./TaskItem";

interface TasksProps {
	taskList: Task[];
	checkHandler: (id: string) => void;
	deleteHandler: (id: string) => void;
}

const Tasks = ({ taskList, checkHandler, deleteHandler }: TasksProps) => {
	return (
		<div>
			<p className="h3 mb-4">List of all tasks</p>
			<div className="d-flex flex-column gap-2">
				{taskList.map((task) => (
					<TaskItem
						key={task.id}
						task={task}
						checkHandler={() => checkHandler(task.id)}
						deleteHandler={() => deleteHandler(task.id)}
					/>
				))}
			</div>
		</div>
	);
};

export default Tasks;
