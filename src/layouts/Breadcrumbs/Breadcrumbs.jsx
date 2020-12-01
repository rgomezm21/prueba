import React from 'react';

export function Breadcrumbs() {
	return (
		<>
			{/* ============================================================== */}
			{/* Bread crumb and right sidebar toggle */}
			{/* ============================================================== */}
			<div className='row page-titles'>
				<div className='col-md-5 align-self-center'>
					<h3 className='text-themecolor'>Dashboard 1</h3>
				</div>
				<div className='col-md-7 align-self-center'>
					<ol className='breadcrumb'>
						<li className='breadcrumb-item'>
							<a href='#'>Home</a>
						</li>
						<li className='breadcrumb-item active'>Dashboard 1</li>
					</ol>
				</div>
				{/* <div className>
								<button className='right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10'>
									<i className='ti-settings text-white' />
								</button>
							</div> */}
			</div>
			{/* ============================================================== */}
			{/* End Bread crumb and right sidebar toggle */}
			{/* ============================================================== */}
		</>
	);
}
