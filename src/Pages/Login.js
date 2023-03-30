import { useState } from 'react';
import { useAuth } from '../Hooks/Auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const [loginMessage, setLoginMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await login(email, password);
        if (data.token) {
            navigate('/blogs');
        }
    };

    return (
        <div className='login-section'>
            <h1>Login</h1>
            <p>{loginMessage}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}