import { Link } from 'react-router-dom';
import banner from '../Images/Zana_banner.png';
import { useAuth } from '../Hooks/Auth';

export default function NavBar() {
  const auth = useAuth();

  return (
    <nav className='nav-bar'>
      <img src={banner} alt='banner img' className='page-banner' />
      <div className='nav-bar-links'>
        <Link to='/' className='enzo-link'>enzo morales</Link>
        {auth.userEmail ? (
          <button className='logout-button' onClick={auth.logout}>
            Logout
          </button>
        ) : (
          <>
            <Link to='/login' className='login-link'>
              Login
            </Link>
            <Link to='/register' className='register-link'>
              Register
            </Link>
          </>
        )}
        <Link to='/blogs' className='blogs-link'>Blogs</Link>
      </div>
      {auth.userEmail ? (
        <p className='welcome-message'>Welcome, {auth.userEmail}</p>
      ) : (
        <p className='welcome-message'>Welcome, Guest</p>
      )}
    </nav>
  );
}