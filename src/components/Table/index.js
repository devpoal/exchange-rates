import React, { useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import api from '../../libs/api';
import { addRate } from '../../actions';
import s from './Table.module.scss';
import { getFullDate } from '../../libs/utils';
import cx from 'classnames';

const Table = ({ rates, addRate }) => {
	const timeoutGetRatesData = useCallback(() => {
		api.getRates().then(response => {
			addRate({
				EUR: response.EUR.toFixed(2),
				USD: response.USD.toFixed(2),
				date: getFullDate('time')
			});
		});

		return setInterval(() => {
			api.getRates().then(response => {
				addRate({
					EUR: response.EUR.toFixed(2),
					USD: response.USD.toFixed(2),
					date: getFullDate('time')
				});
			});
		}, 5000);
	}, [addRate]);

	useEffect(() => {
		const interval = timeoutGetRatesData();

		return () => {
			clearInterval(interval);
		}
	}, [timeoutGetRatesData]);
	
	const reverseRates = useMemo(() => {
		return [].concat(rates).reverse();
	}, [rates]);
	
	return (
		<div className={s['wrapper']}>
			<div className={s['table']}>
				<div className={s['table-row']}>
					<div className={cx(s['table-cell'], s['table-cell--head'])}>USD</div>
					<div className={cx(s['table-cell'], s['table-cell--head'])}>EUR</div>
				</div>
			</div>

			<div className={s['wrapper-table']}>
				<div className={s['table']}>
					{reverseRates && reverseRates.length > 0 && reverseRates.map((item, index) => <div key={index} className={s['table-row']}>
						<div className={s['table-cell']}>{item.USD} ₽</div>
						<div className={s['table-cell']}>{item.EUR} ₽</div>
					</div>)}
				</div>
			</div>
		</div>
	)
};

const mapStateToProps = state => ({
	rates: state.rates
});

const mapDispatchToProps = dispatch => ({
	addRate: data => dispatch(addRate(data))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Table);
