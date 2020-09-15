import axios from "axios";

/**
 * characters instance
 */
const characters = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
  timeout: 40000,
}); /**

* locations instance
*/
const locations = axios.create({
  baseURL: "https://rickandmortyapi.com/api/location",
  timeout: 40000,
});

/**
 * episodes instance
 *
 */
const episodes = axios.create({
  baseURL: "https://rickandmortyapi.com/api/episode",
  timeout: 40000,
});

/**
 * GetCharacters
 * @param {number} page
 */
export async function getCharacters(page) {
  try {
    let res = await characters.get(`/?page=${page}`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
}
