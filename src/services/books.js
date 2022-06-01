export async function addBook(title, author, publicId) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/books/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ title, author, imageId: publicId }),
    });
    return res.json();
  } catch (error) {
    return error.message;
  }
}

export default async function fetchAllBooks() {
  const res = await fetch(`${process.env.API_URL}/api/v1/books`);

  const results = await res.json();

  return results;
}
