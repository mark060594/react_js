import React, { useState } from 'react'

//Styles

import './NavBar.css';

export const Navbar = () => {

    const [active, setActive] = useState(3);

	const handleClick = (itemID) => {
		setActive(itemID);
	};

	const checkActive = (itemID) => (active === itemID ? "li-active" : "");


	return (
		<div>
			<ul>
				<li className={checkActive(1)} onClick={(e) => handleClick(1)}>
					Item 1
				</li>
				<li className={checkActive(2)} onClick={() => handleClick(2)}>
					Item 2
				</li>
				<li className={checkActive(3)} onClick={() => handleClick(3)}>
					Item 3
				</li>
			</ul>
        <div>
            
          
        </div>    
            <div> {(active === 1) ? <p> El 1 </p> : null  }   </div>
            <div> {(active === 2) ? <p> El 2 </p> : null  }   </div>
            <div> {(active === 3) ? <p> El 3 </p> : null  }   </div>
		</div>
	);
}
