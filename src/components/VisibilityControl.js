export const VisibilityControl = ({
	isChecked,
	setShowCompleted,
	clearTask,
}) => {
	const handleDelete = () => {
		if (window.confirm('Estas seguro de querer eliminarlo?')) {
			clearTask();
		}
	};

	return (
		<div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
			<div className="form-check form-switch">
				<input
					className="form-check-input"
					type="checkbox"
					checked={isChecked}
					onChange={(e) => setShowCompleted(e.target.checked)}
				/>
				<label>Ver Tareas Hechas</label>
			</div>
			<button onClick={handleDelete} className="btn btn-danger btn-sm">
				Limpiar
			</button>
		</div>
	);
};
