import React, { useState } from 'react';
import './UserForm.css';
import {useNavigate} from "react-router-dom";

const UserForm = () => {
    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Simulación de consumo de API
            const response = await fetch(`https://api.example.com/users/${userId}`);
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleLogout = () => {
        setUserId('');
        setUserData(null);
        navigate('/');
    };

    return (
        <div className="user-form">
            <h2>User Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>ID usuario:</label>
                    <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" value={userData?.name || ''} disabled/>
                </div>
                <div className="form-group">
                    <label>Apellido Materno:</label>
                    <input type="text" value={userData?.motherLastName || ''} disabled/>
                </div>
                <div className="form-group">
                    <label>Apellido Paterno:</label>
                    <input type="text" value={userData?.fatherLastName || ''} disabled/>
                </div>
                <button type="submit">Buscar</button>
                <div className="logout-button">
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
