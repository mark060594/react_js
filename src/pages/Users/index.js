import React, {useState, useEffect} from "react";
import UserUI from "../../components/UserUI";
import { getUser } from "../../services/users";




	export default function Users() {

		const [user, setUser] = useState([]);	


	

	 useEffect(() => {

		const runFetch = async() => {

			const data = await getUser();
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
	 

	
	


const userUI = user.map(({ firstName, lastName }) => (
	<UserUI  firstName={firstName} lastName={lastName} />
));

	return (

		<div>
				{userUI}
		</div>
	)

	
	


			
}