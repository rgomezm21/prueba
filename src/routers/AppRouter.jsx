import React, { useEffect, useState } from 'react';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { MinimarketRouter } from './MinimarketRouter';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config';

import * as authAction from '../store/actions/authAction';
import { Preloader } from '../layouts/Preloader/Preloader';

export function AppRouter() {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(authAction.login(user.uid, user.displayName));
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}

			setChecking(false);
		});
	}, [dispatch, setChecking, setIsLoggedIn]);

	if (checking) {
		return <Preloader />;
	}
	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						path='/auth'
						isAuthenticated={isLoggedIn}
						component={AuthRouter}
					/>
					<PrivateRoute
						exact
						path='/'
						isAuthenticated={isLoggedIn}
						component={MinimarketRouter}
					/>
				</Switch>
			</div>
		</Router>
	);
}
