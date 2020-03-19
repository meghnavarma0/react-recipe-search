import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className={style.recipe}>
			<h3>T{title}</h3>
			<p>{calories}</p>
			<ol>
				{ingredients.map(ingredient => (
					<li>{ingredient}</li>
				))}
			</ol>
			<img className={style.image} src={image} alt='' />
		</div>
	);
};

export default Recipe;
