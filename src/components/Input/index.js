import React from "react";

// CSS
import "./Input.css";

function Input({ id, label, value, setValue, type='' }) {
	return (
		<div className="input-container">
			<label className="label" htmlFor={id}>
				{label}:
			</label>
			<input
                type={(type !== '') ? "date" : "text" }
				id={id}
				className="input"
				onChange={(event) => setValue(event.target.value)}
				value={value}
			/>
		</div>
	);
}

export default Input;