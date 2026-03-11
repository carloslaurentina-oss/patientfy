"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutShell({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isStudio = pathname.startsWith("/studio");

	if (isStudio) {
		return <>{children}</>;
	}

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
