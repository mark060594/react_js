import { BASE_URL } from "../util/constants";

const USERS_PATH = "users.json";

const createUser = async (data) => {
	const response = await fetch(`${BASE_URL}${USERS_PATH}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
		// body: data,
	});
	return await response.json();
};


const getUser = async (data) => {
	const response = await fetch(`${BASE_URL}${USERS_PATH}`);
	return await response.json();
};

export {createUser ,getUser };