export const TaskRow = ({ task, toggleTask }) => {
	return (
		<tr>
			<td className="d-flex justify-content-between">
				{task.name}
				<input type="checkbox" onChange={() => toggleTask(task)} />
			</td>
		</tr>
	);
};
