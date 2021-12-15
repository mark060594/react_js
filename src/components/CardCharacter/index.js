import React from "react";

//Styles 

import './cardCharacter.css';

function CardCharacter({ name, status, species, image }) {
	return (
		<div className="card-container">

            <div>  
                <img src={image}  alt="#"/>
            </div>

            <div>
                <p> {name} </p>
                <p> {status} </p>
                <p> {species} </p>
            </div>
			
			
		</div>
	);
}

export default CardCharacter;