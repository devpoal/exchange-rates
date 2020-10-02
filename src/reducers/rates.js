const rates = (state = [], action) => {
	switch (action.type) {
		case 'ADD_RATE':
			if (state.length < 30) {
				return [
					...state,
					action.data
				];
			} else {
				state.shift();

				return [
					...state,
					action.data
				];
			}
		default:
			return state;
	}
}

export default rates;
