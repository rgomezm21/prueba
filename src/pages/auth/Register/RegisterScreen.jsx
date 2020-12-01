import React from 'react';
import '../Login.css';

export function RegisterScreen() {
	return (
		<>
			{/* ============================================================== */}
			{/* Main wrapper - style you can find in pages.scss */}
			{/* ============================================================== */}

			<form
				className='form-horizontal form-material'
				id='loginform'
				action='index.html'>
				<a href='#' className='text-center db'>
					<img src='../assets/images/logo-icon.png' alt='Home' />
					<br />
					<img src='../assets/images/logo-text.png' alt='Home' />
				</a>
				<h3 className='box-title m-t-40 m-b-0'>Register Now</h3>
				<small>Create your account and enjoy</small>
				<div className='form-group m-t-20'>
					<div className='col-xs-12'>
						<input
							className='form-control'
							type='text'
							required
							placeholder='Name'
						/>
					</div>
				</div>
				<div className='form-group '>
					<div className='col-xs-12'>
						<input
							className='form-control'
							type='text'
							required
							placeholder='Email'
						/>
					</div>
				</div>
				<div className='form-group '>
					<div className='col-xs-12'>
						<input
							className='form-control'
							type='password'
							required
							placeholder='Password'
						/>
					</div>
				</div>
				<div className='form-group'>
					<div className='col-xs-12'>
						<input
							className='form-control'
							type='password'
							required
							placeholder='Confirm Password'
						/>
					</div>
				</div>
				<div className='form-group row'>
					<div className='col-md-12'>
						<div className='checkbox checkbox-primary p-t-0'>
							<input id='checkbox-signup' type='checkbox' />
							<label htmlFor='checkbox-signup'>
								{' '}
								I agree to all <a href='#'>Terms</a>
							</label>
						</div>
					</div>
				</div>
				<div className='form-group text-center m-t-20'>
					<div className='col-xs-12'>
						<button
							className='btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light'
							type='submit'>
							Sign Up
						</button>
					</div>
				</div>
				<div className='form-group m-b-0'>
					<div className='col-sm-12 text-center'>
						<p>
							Already have an account?{' '}
							<a href='pages-login-2.html' className='text-info m-l-5'>
								<b>Sign In</b>
							</a>
						</p>
					</div>
				</div>
			</form>

			{/* ============================================================== */}
			{/* End Wrapper */}
			{/* ============================================================== */}
		</>
	);
}
