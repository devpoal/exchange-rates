import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import s from './Chart.module.scss';

const Chart = ({ rates }) => {
	const { labels, dataUSD, dataEUR } = useMemo(() => {
		const labels = [], dataUSD = [], dataEUR = [];

		rates.forEach(item => {
			labels.push(item.date);
			dataUSD.push(item.USD);
			dataEUR.push(item.EUR);
		});

		return { labels, dataUSD, dataEUR };
	}, [rates]);

	return (
		<div className={s['chart']}>
			<Line
				data={{
					type: 'line',
					labels: labels,
					datasets: [{
						label: 'USD',
						data: dataUSD,
						fill: false,
						borderColor: [
							'rgb(8 143 239 / 80%)',
						], 
						borderWidth: 3,
						pointRadius: 0
					}, {
						label: 'EUR',
						data: dataEUR,
						fill: false,
						borderColor: [
							'rgb(251 69 145 / 80%)'
						],
						borderWidth: 3,
						pointRadius: 0
					}]
				}}
				width={100}
				height={300}
				options={{ maintainAspectRatio: false }}
			/>
		</div>
	)
};

const mapStateToProps = state => ({
	rates: state.rates
});

export default connect(
	mapStateToProps
)(Chart);