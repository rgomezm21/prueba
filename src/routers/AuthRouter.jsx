import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../pages/auth/Login/LoginScreen';
import { RegisterScreen } from '../pages/auth/Register/RegisterScreen';

export function AuthRouter() {
	return (
		<section
			id='wrapper'
			className='login-register login-sidebar'
			style={{
				backgroundImage: 'url(../assets/images/background/login-register.jpg)',
			}}>
			<div className='login-box card'>
				<div className='card-body'>
					<Switch>
						<Route exact path='/auth/login' component={LoginScreen} />
						<Route exact path='/auth/register' component={RegisterScreen} />
					</Switch>
				</div>
			</div>
		</section>
	);
}
