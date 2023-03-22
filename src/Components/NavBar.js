import { Link } from 'react-router-dom';

import banner from '../Images/Zana_banner.png';

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <img src={banner} alt='banner img' className='page-banner' />
            <div className='nav-bar-links'>
                <Link to='/' className='enzo-link'>enzo morales</Link>
                <Link to='/blogs' className='blogs-link'>Blogs</Link>
            </div>
        </nav>
    );
}