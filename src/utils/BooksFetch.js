
export default function BooksFetch() {
const res = await fetch(
    'https://cookin-n-bookin-be.herokuapp.com/api/v1/books'
);

const results = await res.json();

console.log('RESULTS', results);

return results;
}
