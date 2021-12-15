import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

import Counter from './components/Counter/index';
import { Navbar } from './components/Navbar/index';
import { DinamicNavbar } from './components/DinamicNavBar';
import UserName from "./components/UserName";
import CardCharacter from './components/CardCharacter';

function App() {

  const [users, setUsers] = useState([]);
  const [character, setCharacter] = useState([]);



  useEffect(() => {
		/* const getUsers = async () => {
			const response = await fetch("users.json");
			console.table(response);
			const data = await response.json();
			console.log(data);
			setUsers(data); */

      const getCharacter = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        console.table(response);
        const data = await response.json();
        console.log(data);
        const arrayData = Object.values(data.results)
        setCharacter(arrayData);
        

		};
   /*  getUsers(); */
    getCharacter();
		/* console.log(character.results,'character'); */

	}, []);

  console.log(character,'character');
 const characterUI = character.map(({id, name, status, species, image }) => (
		<CardCharacter key={id} name={name} status={status} species={species} image={image} />
	));


  /* const usersUI = users.map(({ id, firstName, lastName }) => (
		<UserName key={id} firstName={firstName} lastName={lastName} />
	));
 */
  return (

    <div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* <Navbar/> */}
        
        <div className='main-cards-container'>
          {characterUI}
        </div>
        
				{/* {usersUI} */}
			</header>
		</div>
  );
}

export default App;
