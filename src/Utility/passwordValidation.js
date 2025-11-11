const passwordValidation = (password) => {
	return (
		password.length >= 6 &&
		// /[A-Z]/.test(password) &&
		/[a-z]/.test(password) &&
		/[0-9]/.test(password)
	);
};

export default passwordValidation;
