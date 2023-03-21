import { useState } from 'react';
import axios from 'axios';

const urlEndpoint = 'http://localhost:3000/blogs';

export default function BlogForm() {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    author: '',
    year: '',
    categories: [],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`${urlEndpoint}/create-one`, formData);

    // Redirect back to blogs page
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Title:</label>
      <input type='text' id='title' name='title' value={formData.title} onChange={(event) => setFormData({ ...formData, title: event.target.value })} />
      <label htmlFor='text'>Text:</label>
      <textarea id='text' name='text' value={formData.text} onChange={(event) => setFormData({ ...formData, text: event.target.value })}></textarea>
      <label htmlFor='author'>Author:</label>
      <input type='text' id='author' name='author' value={formData.author} onChange={(event) => setFormData({ ...formData, author: event.target.value })} />
      {/* Year input goes here */}
      {/* Categories input goes here */}
      <button type='submit'>Create</button>
    </form>
  );
}