
export default async function allBooksFetch() {
const res = await fetch(
    `${process.env.API_URL}/api/v1/books`
);

const results = await res.json();

return results;
}
