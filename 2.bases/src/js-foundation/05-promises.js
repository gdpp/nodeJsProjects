const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // fetch(url)
    //     .then((resp) => response.json())
    //     .then((pokemon) => pokemon.name);

    const resp = await fetch(url);
    const pokemon = await resp.json();

    return pokemon.name;
};
