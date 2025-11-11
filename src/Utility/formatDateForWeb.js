function formatDateForWeb(isoString) {
	if (!isoString || typeof isoString !== 'string') return 'Invalid date';

	const date = new Date(isoString);
	if (isNaN(date.getTime())) return 'Invalid date';

	const options = {
		weekday: 'long', // Thursday
		year: 'numeric', // 2025
		month: 'long', // November
		day: 'numeric', // 13
		hour: '2-digit', // 11 PM
		minute: '2-digit', // 47
		// second: '2-digit', // 45
		hour12: true, // AM/PM format
		timeZone: 'Asia/Dhaka',
	};

	return new Intl.DateTimeFormat('en-US', options).format(date);
}

export default formatDateForWeb;
