import React, { useState } from 'react'

//Styles

import './DinamicNavBar.css';

export const DinamicNavbar = () => {

    const [active, setActive] = useState(3);

	const handleClick = (itemID) => {
		setActive(itemID);
	};
	const checkActive = (itemID) => (active === itemID ? "li-active" : "");

const items = [

    {
        id:1,
        item: 'item1'
    },
    {
        id:2,
        item: 'item2'
    },
    {
        id:3,
        item: 'item3'
    },



]


	return (
        // Construido a mano

		<div> 
			{/* <ul>
				<li className={checkActive(1)} onClick={(e) => handleClick(1)}>
					Item 1
				</li>
				<li className={checkActive(2)} onClick={() => handleClick(2)}>
					Item 2
				</li>
				<li className={checkActive(3)} onClick={() => handleClick(3)}>
					Item 3
				</li>
			</ul> */}

            {/* Construido dinamicamente */}

            <ul>
                {
                    items.map((element, index) => (

                        <li key={element.id} className={checkActive(index)} onClick={(e) => handleClick(index)}>     
					         {element.item}
				        </li>
                    ))
                }

            </ul>
            
       
            
          
            <div>    
                <div> {(active === 1) ? <p> El 1 </p> : null  }   </div>
                <div> {(active === 2) ? <p> El 2 </p> : null  }   </div>
                <div> {(active === 3) ? <p> El 3 </p> : null  }   </div>
            </div>

        </div>
	);
}