import './App.css';
import { Counter } from './Counter';
import { Saludo } from './Saludo';

function App() {
	return (
		<>
			<Saludo mensaje={ "Hola, buenos días." } />
			<Counter maxCount={ 15 }/>
		</>
	)
}

export { App };
