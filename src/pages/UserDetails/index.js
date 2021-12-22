import React, { useEffect, useState } from "react";

// RR
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { getUser, deleteUser } from "../../services/users";
 




export default function UserDetail() {
	const [user, setUser] = useState({});
	const params = useParams();
	const navigate = useNavigate();


	const handleDelete = async() => {
		await deleteUser(params.userID);
		navigate(-1);
		console.log("Se elimino Correctamente");
	}

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
			<button onClick={() => navigate(`update`)}>
				 Update
			</button>
			<br />

			<button onClick={handleDelete}>
				 Delete
			</button>

			<Outlet />
		</div>
	);
}

