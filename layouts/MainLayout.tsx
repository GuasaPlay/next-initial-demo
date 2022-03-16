import { FC } from 'react';

import Head from 'next/head';
import { Navbar } from '../components/Navbar';

import styles from '../styles/MainLayout.module.css';

export const MainLayout: FC = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home</title>
				<meta name="description" content="Home Page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className={styles.main}>{children}</main>
		</div>
	);
};
