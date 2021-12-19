import React from "react";
import { useNavigate } from "react-router-dom";

//Styles 



function UserUI({ id, firstName, lastName }) {

	const navigate = useNavigate();
	
	return (
		<ul>

            <li onClick={(e) => navigate(`/users/${id}`)}>  
                {firstName} {lastName}
            </li>
            
		</ul>
	);
}

export default UserUI;