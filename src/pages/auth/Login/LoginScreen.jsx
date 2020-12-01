import React from 'react';
import '../Login.css';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as authAction from '../../../store/actions/authAction';

const initialValues = {
	email: '',
	password: '',
};

export function LoginScreen() {
	const dispatch = useDispatch();

	const handleGoogleSignIn = () => {
		dispatch(authAction.startGoogleLogin());
	};

	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<>
			{/* ============================================================== */}
			{/* Main wrapper - style you can find in pages.scss */}
			{/* ============================================================== */}
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				{({ values, handleSubmit, handleChange, handleBlur }) => (
					<>
						<form
							className='form-horizontal form-material'
							id='loginform'
							onSubmit={handleSubmit}>
							<a className='text-center db'>
								<img src='../assets/images/logo-icon.png' alt='Home' />
								<br />
								<img src='../assets/images/logo-text.png' alt='Home' />
							</a>
							<div className='form-group m-t-40'>
								<div className='col-xs-12'>
									<input
										className='form-control'
										type='email'
										placeholder='Email'
										id='email'
										name='email'
										value={values.email}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
							</div>
							<div className='form-group'>
								<div className='col-xs-12'>
									<input
										className='form-control'
										type='password'
										placeholder='Password'
										id='password'
										name='password'
										value={values.password}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
							</div>
							<div className='form-group row'>
								<div className='col-md-12'>
									<div className='checkbox checkbox-primary pull-left p-t-0'>
										<input
											id='checkbox-signup'
											type='checkbox'
											className='filled-in chk-col-light-blue'
										/>
										<label htmlFor='checkbox-signup'> Remember me </label>
									</div>
									<a href='#' id='to-recover' className='text-dark pull-right'>
										<i className='fa fa-lock m-r-5' /> Forgot pwd?
									</a>{' '}
								</div>
							</div>
							<div className='form-group text-center m-t-20'>
								<div className='col-xs-12'>
									<button
										className='btn btn-info btn-lg btn-block text-uppercase btn-rounded'
										type='submit'>
										Log In
									</button>
								</div>
							</div>
							<div className='row'>
								<div className='col-xs-12 col-sm-12 col-md-12 m-t-10 text-center'>
									<div className='social'>
										<a
											href='#'
											className='btn  btn-facebook'
											data-toggle='tooltip'
											title='Login with Facebook'>
											{' '}
											<i aria-hidden='true' className='fa fa-facebook' />{' '}
										</a>{' '}
										<button
											type='button'
											className='btn btn-googleplus'
											data-toggle='tooltip'
											title='Login with Google'
											onClick={handleGoogleSignIn}>
											{' '}
											<i
												aria-hidden='true'
												className='fa fa-google-plus'
											/>{' '}
										</button>{' '}
									</div>
								</div>
							</div>
							<div className='form-group m-b-0'>
								<div className='col-sm-12 text-center'>
									Don't have an account?{' '}
									<a href='pages-register2.html' className='text-primary m-l-5'>
										<b>Sign Up</b>
									</a>
								</div>
							</div>
						</form>
					</>
				)}
			</Formik>
			{/* ============================================================== */}
			{/* End Wrapper */}
			{/* ============================================================== */}
		</>
	);
}

/**
 * 
 * <form
							className='form-horizontal'
							id='recoverform'
							action='index.html'>
							<div className='form-group '>
								<div className='col-xs-12'>
									<h3>Recover Password</h3>
									<p className='text-muted'>
										Enter your Email and instructions will be sent to you!{' '}
									</p>
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
							<div className='form-group text-center m-t-20'>
								<div className='col-xs-12'>
									<button
										className='btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light'
										type='submit'>
										Reset
									</button>
								</div>
							</div>
						</form>
 */
