export const validationNickname = (nickname: string) => {
	if (nickname.length < 6) {
		return "Имя не может быть меньше 6 символов"

	} else if (nickname.length > 20) {
		return "Имя не может быть больше 20 символов"
	}
	return null;
};

export const validationEmail = (email: string) => {
	if (
		!String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
	) {
		return "Недопустимый E-mail"
	} else if (email.length > 40) {
		return "E-mail не может быть больше 40 символов";
	}
	return null;
};

export const validationPassword = (password: string) => {
	if (password.length < 6) {
		return "Пароль не может быть меньше 6 символов"

	} else if (password.length > 20) {
		return "Пароль не может быть больше 20 символов"

	}
	return null;
};