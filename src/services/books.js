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

export async function getBookById(id) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/books/${id}`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });
    return res.json();
  } catch (error) {
    return error.message;
  }
}

export async function getBooksByUserId(id) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/${id}`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });
    return res.json();
  } catch (error) {
    return error.message;
  }
}

export async function fetchAllBooks() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/books`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });
    const results = await res.json();
    return results;
  } catch (error) {
    return error.message;
  }
}

export async function addBookToUser(userId, bookId) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/books/userbook`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ userId, bookId }),
    });
  } catch (error) {
    return error.message;
  }
}
