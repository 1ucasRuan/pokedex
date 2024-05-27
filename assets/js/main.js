const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//Fazendo requisição através da URL, método tradicional com (function)
// fetch(url)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (jsonBody) {
//         console.log(jsonBody)
//     })
//     .catch(function (error) {
//         console.error(error)
//     })
//     .finally(function () {
//         console.log('Requisição concluida!')
//     })


//Fazendo requisição através da URL, método reduzido (=>) (function)
fetch(url)
    .then((response) => response.json())    
    .then((jsonBody) => jsonBody.results)  
    .then((pokemonList) => {
        //debugger
        console.log(pokemonList)
    }) 
    .catch((error) => console.error(error)) 