import { useState } from "react";

interface FormProps {
	submitHandler: (name: string, description: string) => void;
}

const Form = ({ submitHandler }: FormProps) => {
	const [taskName, setTaskName] = useState("");
	const [taskDescription, setTaskDescription] = useState("");

	const resetForm = () => {
		setTaskName("");
		setTaskDescription("");
	};

	return (
		<div>
			<p className="h3 mb-4 ">Add task</p>
			<form>
				<div className="d-flex flex-column gap-3">
					<div className="d-flex flex-column gap-1">
						<label htmlFor="name">Task name:</label>
						<input
							type="text"
							className="form-control"
							name="name"
							placeholder="Enter your task name"
							value={taskName}
							required
							onChange={(e) => setTaskName(e.currentTarget.value)}
						/>
					</div>
					<div className="d-flex flex-column gap-1">
						<label htmlFor="description">Task description:</label>
						<textarea
							className="form-control"
							name="description"
							placeholder="Enter your task description"
							value={taskDescription}
							onChange={(e) => setTaskDescription(e.currentTarget.value)}
						/>
					</div>
					<div className="align-self-end">
						<button
							onClick={(e) => {
								e.preventDefault();
								resetForm();
							}}
							className="btn btn-secondary me-2"
						>
							Cancel
						</button>
						<button
							className="btn btn-primary"
							disabled={!taskName}
							onClick={(e) => {
								e.preventDefault();
								submitHandler(taskName, taskDescription);
								resetForm();
							}}
						>
							Add
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Form;
