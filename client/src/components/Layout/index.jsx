import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import CustomCursor from "../CustomCursor";

import Header from "../Header";

import ServicesPage from "../pages/ServicesPage";

export default function Layout({ headerVariant }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Header variant={headerVariant} />
			<Outlet />
			<CustomCursor />

			<ServicesPage />
		</>
	);
}
