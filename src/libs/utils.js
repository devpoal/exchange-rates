export function getFullDate(type) {
	const
		today = new Date(),
		dd = String(today.getDate()).padStart(2, '0'),
		mm = String(today.getMonth() + 1).padStart(2, '0'),
		yyyy = today.getFullYear(),
		h = today.getHours(),
		m = today.getMinutes(),
		s = today.getSeconds();

	if (type === 'time') {
		return `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
	} else {
		return `${mm}.${dd}.${yyyy} ${h}:${m}:${s}`;
	}
}