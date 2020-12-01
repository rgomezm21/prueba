import React from 'react';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';
import { prueba } from '../prueba';

export function MinimarketRouter() {
	return (
		<div>
			<Dashboard>
				<Switch>
					<Route exact path='/' component={prueba} />
				</Switch>
			</Dashboard>
		</div>
	);
}
