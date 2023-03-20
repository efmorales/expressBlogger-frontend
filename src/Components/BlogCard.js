// This component is used to display the blog cards on the blog page (../Pages/Blogs.js)

import { useState, useEffect } from 'react';

import axios from 'axios';

//call endpoint to update or delete the blog

const urlEndpoint = 'http://localhost:3000/blogs';

// card component

function BlogCard() {
    const [blogs, setBlogs] = useState([]);

    // get all blogs

    const getBlogs = () => {
        axios.get(`${urlEndpoint}/all`).then((res) => {
            setBlogs(res.data);
        });
    };

    useEffect(() => {
        getBlogs();
    }, []);


    // delete blog

    const deleteBlog = (title) => {
        axios.delete(`${urlEndpoint}/delete-one/${title}`).then((res) => {
            console.log(res);
        });
    };

    // update blog

    const updateBlog = (title) => {
        axios.put(`${urlEndpoint}/update-one/${title}`).then((res) => {
            console.log(res);
        });
    };

    // render blogs

    return (
        <div>
            {blogs.map((blog) => {
                return (
                <div key={blog.title}>
                    <h1>{blog.title}</h1>
                    <p>{blog.content}</p>
                    <button onClick={() => deleteBlog(blog.title)}>Delete</button>
                    <button onClick={() => updateBlog(blog.title)}>Update</button>
                </div>
            )})}
        </div>

    );
}

export default BlogCard;