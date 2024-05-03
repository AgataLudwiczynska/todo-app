import { NavArrowDown, Xmark } from "iconoir-react";
import { useState } from "react";

export type Task = {
	id: string;
	name: string;
	description?: string;
	done: boolean;
};

interface TaskItemProps {
	task: Task;
	checkHandler: () => void;
	deleteHandler: () => void;
}

const TaskItem = ({
	task: { name, description, id, done },
	checkHandler,
	deleteHandler,
}: TaskItemProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="card">
			<div className="card-body p-2">
				<div className="d-flex justify-content-between align-items-center">
					<input
						type="checkbox"
						value={id}
						checked={done}
						onChange={checkHandler}
						className="col-1"
					/>
					<p
						className={`h6 col mb-0 ${
							done && "text-decoration-line-through text-body-tertiary"
						}`}
					>
						{name}
					</p>
					<button className="btn btn-sm col-1" onClick={deleteHandler}>
						<Xmark className="text-danger" />
					</button>
					{description && (
						<button
							className="btn btn-sm col-1"
							onClick={() => setIsOpen(!isOpen)}
						>
							<NavArrowDown />
						</button>
					)}
				</div>
				{description && isOpen && (
					<p className="card-text text-secondary p-3">{description}</p>
				)}
			</div>
		</div>
	);
};

export default TaskItem;
