function convertPokemonToLi(pokemon) {
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"  alt="${pokemon.name}"/>
            </div>
        </li>`
}

const pokemonList = document.getElementById('pokemonList')

//Fazendo requisição através da URL, método reduzido (=>) (function)
pokeApi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

    console.log(pokemonList)
})