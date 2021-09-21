import Home from './pages/home/Home';
import { Switch, Route } from 'react-router-dom';
import './app.scss';

const HatsPage = () => {
	return (
		<div>
			<h1>Hats Page</h1>
		</div>
	);
};

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
