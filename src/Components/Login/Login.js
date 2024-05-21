import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Login.css';

const Login = () => {
    const { email, setEmail } = useContext(UserContext);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [attempts, setAttempts] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === 'angel@azteca.com' && password === '12345') {
            alert('Login successful');
            setError('');
            navigate('/form');
        } else {
            setError('Invalid email or password');
            setAttempts(prevAttempts => prevAttempts + 1);

            if (attempts + 1 >= 3) {
                console.log('Contraseña incorrecta');
            }
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={attempts >= 3}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={attempts >= 3}
                    />
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit" disabled={attempts >= 3}>Login</button>
            </form>
        </div>
    );
};

export default Login;
