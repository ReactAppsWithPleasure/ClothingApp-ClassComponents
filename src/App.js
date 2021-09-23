import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.scss';

import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignToApp from './pages/sign-to-app/sign-to-app';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});

					console.log(this.state);
				});
			}

			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/shop' component={Shop} />
					<Route path='/signin' component={SignToApp} />
				</Switch>
			</div>
		);
	}
}

export default App;
