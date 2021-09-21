import { Switch, Route } from 'react-router-dom';

import './app.scss';

import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Header from './components/header/header';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/shop' component={Shop} />
			</Switch>
		</div>
	);
}

export default App;
