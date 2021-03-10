import React, { useState } from "react";

//create your first component
export function Home() {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	const addTask = e => {
		e.preventDefault();
		if (task === "") {
			alert("Ingrese una tarea");
			return;
		}
		setList([...list, { task, namelist: task }]);
		setTask("");
	};
	const deleteList = id => {
		const arrayNew = list.filter(item => item.id !== id);
		setList(arrayNew);
	};
	return (
		<div className="container ">
			<form onSubmit={addTask}>
				<div className="form-row center">
					<div className="col-10 mb-5 mt-5 ">
						<h1 className="center">To do List</h1>
						<input
							type="text"
							className="form-control"
							placeholder="Nueva Tarea"
							onChange={e => setTask(e.target.value)}
							value={task}
						/>
						<br />
						<button
							type="submit"
							className="btn btn-primary btn-md btn-block">
							Agregar tarea
						</button>
					</div>
				</div>
			</form>

			<div className="row center">
				<div className="col-10">
					<ul className="list-group">
						{list.map(item => (
							<li className="list-group-item" key={item.id}>
								{item.namelist}
								<button
									type="button"
									className="btn btn-outline-primary float-right"
									onClick={() => deleteList(item.id)}>
									X
								</button>
							</li>
						))}
						{list.length === 0 ? (
							<li className="list-group-item">Agenda</li>
						) : (
							<li className="list-group-item">
								Cantidad de tareas:{list.length}
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}
