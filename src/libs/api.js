const api = {
	apiKey: '3806d35e9bb2246cd9faee7808f829a36c837a5e59cf9672e42a308fc21628c5',

	fetch: (url, options, type) => {
		return fetch(url, {
			...options,
			method: 'GET'
		}).then((response) => {
			return response.json();
		}).then((data) => {
			return data;
		}).catch(e => {
			console.log(e);
			return {
				RUB: 0
			}
		});
	},

	getRates: async function () {
		return {
			EUR: (await this.fetch(`https://min-api.cryptocompare.com/data/price?fsym=EUR&tsyms=RUB&api_key=${this.apiKey}`)).RUB || 0,
			USD: (await this.fetch(`https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=RUB&api_key=${this.apiKey}`)).RUB || 0
		};
	}
};

export default api;