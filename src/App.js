import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Input, InputGroup, Table } from "reactstrap";
import { useState } from "react";

function App() {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(value);
		setValue("");
	};

	const addTodo = (text) => {
		const newTodos = [...todos, { text, complete: false }];
		setTodos(newTodos);
		console.log(newTodos);
	};

	const onClickDelete = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	const onClickComplete = (index) => {
		const newTodos = [...todos];
		newTodos[index].complete = !newTodos[index].complete;
		setTodos(newTodos);
	};

	return (
		<div className="App">
			<Container>
				<h1 className="mt-4">Todo List</h1>
				<Form onSubmit={handleSubmit}>
					<InputGroup>
						<Input
							type="text"
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						<Button type="submit" color="primary">
							追加
						</Button>
					</InputGroup>
				</Form>
			</Container>
			<Container>
				<Table>
					<tbody>
						{todos &&
							todos.map((todo, index) => (
								<tr key={index}>
									<th
										className="text-left"
										style={{
											textDecoration: todo.complete ? "line-through" : "",
										}}>
										{todo.text}
									</th>
									<td className="text-right">
										<Button
											color={todo.complete ? "secondary" : "success"}
											className="mr2"
											onClick={() => onClickComplete(index)}>
											{todo.complete ? "完了" : "未完了"}
										</Button>
										<Button color="danger" onClick={() => onClickDelete(index)}>
											削除
										</Button>
									</td>
								</tr>
							))}
					</tbody>
				</Table>
			</Container>
		</div>
	);
}

export default App;
