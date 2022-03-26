const fetch = require('node-fetch');

const getPokemonListData = async (offset, limit) => {
  if (offset === 800) limit -= 2;
  try {
    let res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    let data = await res.json();
    return data.results;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getPokemonListData;
