import React from "react";

//Styles 



function UserUI({ firstName, lastName }) {
	return (
		<ul>

            <li>  
                {firstName} {lastName}
            </li>
            
		</ul>
	);
}

export default UserUI;