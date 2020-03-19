import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

import './App.css';

function App() {
	const APP_ID = 'db6bc077';
	const APP_KEY = '5ffe8852de7b6a87461386dfeefe981b';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('chicken');

	useEffect(() => {
		getRecipes();
	}, [query]);

	const updateSearch = e => {
		setSearch(e.target.value);
		console.log(search);
	};

	const getSearch = e => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	};
	return (
		<div className='App'>
			<form className='search-form' onSubmit={getSearch}>
				<input
					className='search-bar'
					type='text'
					value={search}
					onChange={updateSearch}
				/>
				<button className='search-button' type='submit'>
					Submit
				</button>
			</form>
			<div className='recipes'>
				{recipes.map(recipe => (
					<Recipe
						key={recipe.recipe.label}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredientLines}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
