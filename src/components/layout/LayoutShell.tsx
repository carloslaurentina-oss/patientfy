"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutShell({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="page-wrapper">
			<main className="main-wrapper">
				<Navbar />
				{children}
			</main>
			<Footer />
		</div>
	);
}
