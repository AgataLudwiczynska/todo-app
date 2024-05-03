import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

interface FormProps {
	submitHandler: (name: string, description: string) => void;
}

const Form = ({ submitHandler }: FormProps) => {
	const [taskName, setTaskName] = useState("");
	const [taskDescription, setTaskDescription] = useState("");

	const intl = useIntl();
	const namePlaceholder = intl.formatMessage({
		id: "app.form.name.placeholder",
		defaultMessage: "Enter your task name",
	});
	const descriptionPlaceholder = intl.formatMessage({
		id: "app.form.description.placeholder",
		defaultMessage: "Enter your task description",
	});

	const resetForm = () => {
		setTaskName("");
		setTaskDescription("");
	};

	return (
		<div>
			<p className="h3 mb-4 ">
				<FormattedMessage id="app.form.header" defaultMessage="Add task" />
			</p>
			<form>
				<div className="d-flex flex-column gap-3">
					<div className="d-flex flex-column gap-1">
						<label htmlFor="name">
							<FormattedMessage
								id="app.form.name.label"
								defaultMessage={"Task name:"}
							/>
						</label>
						<input
							type="text"
							className="form-control"
							name="name"
							placeholder={namePlaceholder}
							value={taskName}
							required
							onChange={(e) => setTaskName(e.currentTarget.value)}
						/>
					</div>
					<div className="d-flex flex-column gap-1">
						<label htmlFor="description">
							<FormattedMessage
								id="app.form.description.label"
								defaultMessage={"Task description:"}
							/>
						</label>
						<textarea
							className="form-control"
							name="description"
							placeholder={descriptionPlaceholder}
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
							<FormattedMessage
								id="app.form.cancel.button"
								defaultMessage={"Cancel"}
							/>
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
							<FormattedMessage
								id="app.form.success.button"
								defaultMessage={"Add"}
							/>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Form;
