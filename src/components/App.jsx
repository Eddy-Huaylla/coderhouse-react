import './App.css';

function App() {
	const valor = 5;

	return (
		<div className='divGeneral' style={{ backgroundColor: "red" }}>
			<h1>Hola!</h1>
			<p>{valor}</p>
			<input type="text" />
		</div>
	)
}

export { App };
