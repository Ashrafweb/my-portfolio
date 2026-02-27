import React from "react";
import Head from "next/head";
import Header from "./header";

function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Ashraf Uddin</title>
				<meta name='description' content='Ashraf' />
				<link rel='icon' href='/pro_img.jpg' />
			</Head>

			<main className='min-h-screen px-6 md:px-12 lg:px-24 py-8'>
				{children}
			</main>
		</>
	);
}

export default Layout;
