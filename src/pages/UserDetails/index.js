import React, { useEffect, useState } from "react";

// RR
import { useParams } from "react-router-dom";
import { getUser } from "../../services/users";

export default function UserDetail() {
	const [user, setUser] = useState({});
	const params = useParams();

	useEffect(() => {
		const get = async () => {
			const response = await getUser(params.userID);
			console.log(params.userID)
			console.log(response,'en details');
			setUser(response);
		};
		get();
	}, [params]);

	return (
		<div>
			Hola soy el detalle del usuario: {user?.firstName} {user?.lastName}
		</div>
	);
}