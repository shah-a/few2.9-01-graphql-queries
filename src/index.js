import fetch from 'node-fetch';
import queries from './queries.js'; // eslint-disable-line import/extensions

const fetchData = (query) => (
  fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  }).then((res) => res.json())
);

/* To see responses one by one, print individual indices of `data`.
 * To see all responses at once, print full `data` array. */
const data = await Promise.all(queries.map((query) => fetchData(query)));
console.log(JSON.stringify(data[0], null, 2)); // eslint-disable-line no-console
