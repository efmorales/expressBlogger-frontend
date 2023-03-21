// This component is used to display the blog cards on the blog page (../Pages/Blogs.js)

// each title will be a direct link/route to the blog page

// each blog card will have a delete button

// each blog card will have an edit button



import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

//call endpoint to update or delete the blog

const urlEndpoint = 'http://localhost:3000/blogs';

// inside 'http://localhost:3000/blogs' there's an object called 'blogs' which contains an array of objects with the keys: 'title', 'author', 'text'

// card component

export default function BlogCard() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        axios.get(`${urlEndpoint}/all`).then((response) => {

            setBlogs(response.data.blogs);

        });

    }, []);



    return (

        <div className='blog-card'>

            {blogs.map((blog) => (

                <div key={blog.id}>

                    <Link to={`/blogs/${blog.id}`}>
                        <h1>{blog.title.toUpperCase()}</h1>
                    </Link>

                    <h2>author: {blog.author}</h2>

                    <p>{blog.text}</p>

                </div>

            ))}

        </div>

    );

}