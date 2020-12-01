import React from 'react';
import { Header } from '../../layouts/Header/Header';
import { Sidebar } from '../../layouts/Sidebar/Sidebar';
import { Breadcrumbs } from '../../layouts/Breadcrumbs/Breadcrumbs';
import { Footer } from '../../layouts/Footer/Footer';

export function Dashboard({ children }) {
	return (
		<>
			{/* ============================================================== */}
			{/* Main wrapper - style you can find in pages.scss */}
			{/* ============================================================== */}
			<div id='main-wrapper'>
				<Header />
				<Sidebar />
				{/* ============================================================== */}
				{/* Page wrapper  */}
				{/* ============================================================== */}
				<div class='page-wrapper'>
					{/* ============================================================== */}
					{/* Container fluid  */}
					{/* ============================================================== */}
					<div class='container-fluid'>
						<Breadcrumbs />
						{children}
						<Footer />
					</div>
					{/* ============================================================== */}
					{/* End Container fluid  */}
					{/* ============================================================== */}
				</div>
				{/* ============================================================== */}
				{/* End Page wrapper  */}
				{/* ============================================================== */}
			</div>
		</>
	);
}
