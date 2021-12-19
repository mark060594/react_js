import React, {useState, useEffect} from "react";
import UserUI from "../../components/UserUI";
import { getUsers } from "../../services/users";




	export default function Users() {

		const [user, setUser] = useState([]);	


	

	 useEffect(() => {

		const runFetch = async() => {

			const data = await getUsers();
			console.log(data)
			const parseData = Object.keys(data).map((key) => {
				const { firstName, lastName } = data[key];

				return {
					id: key,
					firstName,
					lastName
				}
			});
			setUser(parseData);
			
	  }

	  runFetch();

	 },[])
	 

	console.log(user,'en users');
	


const userUI = user.map(({ id, firstName, lastName }) => (
	<UserUI key={id} id={id} firstName={firstName} lastName={lastName} />
));

	return (

		<div>
				{userUI}
		</div>
	)

	
	


			
}