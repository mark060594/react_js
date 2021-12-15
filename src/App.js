import "./App.css";
import { useEffect, useState } from "react";

// Components
import CardCharacter from "./components/CardCharacter";

// Services
import { listCharacters } from "./services/character";

function App() {
	const [characters, setCharacters] = useState([]);
	const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const list = async () => {
			const { results, info } = await listCharacters();
			setCharacters(results);
			setData(info);
      setIsLoading(false);
		};
		list();
	}, []);

	const handleClick = async (action) => {
    setIsLoading(true);
		if (action === "next" && data.next != null) {
			const page = data.next.split("?")[1];
			const { results, info } = await listCharacters(page);
			setCharacters(results);
			setData(info);
		}

    if (action === "prev" && data.prev != null) {
			const page = data.prev.split("?")[1];
			const { results, info } = await listCharacters(page);
			setCharacters(results);
			setData(info);
		}
    setIsLoading(false);
	};

  const hasPrevLink = data.prev ? true : false;
	const hasNextLink = data.next ? true : false;


	console.log(data);

	return (
		<div className="App">
			<div className="fixed-container">
				<button onClick={() => handleClick("next")} className="btn">
					Next
				</button>
        <button onClick={() => handleClick("prev")} className="btn">
					Prev
				</button>
			</div>
			{characters.map(({ id, image, name, species, status }) => (
				<CardCharacter
					key={id}
					image={image}
					name={name}
					species={species}
					status={status}
				/>
			))}
		</div>
	);
}

export default App;