// this Blogs.js file is the same as the Route path="/blogs"; it will show all the blogs by default
import BlogCard from '../Components/BlogCard';
import { Link } from 'react-router-dom';

export default function Blogs() {
    return (
        <div className='blog-section'>
            <div className='blogs-banner'>
                <h1>Blogs</h1>
                <button className='create-blog-button'>
                    <Link to='/create-blog'>Create new blog</Link>
                </button>
            </div>
            <BlogCard />
        </div>
    );
}