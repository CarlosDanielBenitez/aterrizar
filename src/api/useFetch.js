//!mokeapi
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(response => response.json)
// .then(response =>{
//     console.log(response)
// })

//!rapidapi
// const url = 'https://bravenewcoin.p.rapidapi.com/ohlcv?size=10';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		Authorization: 'Bearer <append token here>',
// 		'X-RapidAPI-Key': '5edf748850msh3dbef1fc4233ba0p1d8d1fjsn5111efcfa1c6',
// 		'X-RapidAPI-Host': 'bravenewcoin.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


//! jsonplaceholder
import { useState, useEffect } from "react";

export function useFetch(url) {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setData(data))
	}, []);

	return { data };
}