
export default async function BooksFetch() {
const res = await fetch(
    'https://cookin-n-bookin-be.herokuapp.com/api/v1/books'
);

const results = await res.json();

return results;
}
