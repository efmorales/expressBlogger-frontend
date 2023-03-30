import { Link } from 'react-router-dom';

import banner from '../Images/Zana_banner.png';

import { useAuth } from '../Hooks/Auth';

// the navbar will have a text welcoming the user if they are logged in

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <img src={banner} alt='banner img' className='page-banner' />
            <div className='nav-bar-links'>
                <Link to='/' className='enzo-link'>enzo morales</Link>
                <Link to='/login' className='login-link'>Login</Link>
                <Link to='/register' className='register-link'>Register</Link>
                <Link to='/blogs' className='blogs-link'>Blogs</Link>
            </div>
            <p className='welcome-message'>Welcome, {useAuth().user?.email}</p>
        </nav>
    );
}