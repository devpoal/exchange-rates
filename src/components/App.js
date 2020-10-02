import React from 'react';
import s from './App.module.scss';
import Header from './Header';
import Table from './Table';
import Chart from './Chart';

const App = () => (
	<div className={s['App']}>
		<Header />
		<Table />
		<Chart />
	</div>
);

export default App;
