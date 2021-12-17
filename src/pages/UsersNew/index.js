import React from "react";
import { useState } from "react/cjs/react.development";

// CSS
import "./UsersNew.css";

// Input
import Input from "../../components/Input";

// Services
import { createUser } from "../../services/users";

export default function UsersNew() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [occupation, setOccupation] = useState("");
    const [birthday, setBirthday] = useState(0);

    const cleanForm = () => {
		setFirstName("");
		setLastName("");
		setGender("");
		setOccupation("");
		setBirthday("");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const data = {
				firstName,
				lastName,
				gender,
				occupation,
				birthday,
			};
			await createUser(data);
			cleanForm();
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className="container flex-col">
			<h1>Crea un usuario</h1>
			<form onSubmit={handleSubmit}>
				<Input
					id="firstName"
					label="First Name"
					value={firstName}
					setValue={setFirstName}
				/>
				<Input
					id="lastName"
					label="Last Name"
					value={lastName}
					setValue={setLastName}
				/>
                <Input
					id="gender"
					label="Gender"
					value={gender}
					setValue={setGender}
				/>
                <Input
					id="occupation"
					label="Occupation"
					value={occupation}
					setValue={setOccupation}
				/>
                <Input
                    type='date'
					id="birthday"
					label="Birthday"
					value={birthday}
					setValue={setBirthday}
				/>

                <button type="submit">Crear</button>
			</form>
		</div>
	);
}