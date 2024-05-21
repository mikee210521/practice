import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import UserForm from "./UserForm/UserForm";

const FormComponent = () => {
    const { email } = useContext(UserContext);

    return (
        <div className="form-container">
            <h2>Welcome {email}</h2>
            <UserForm/>
        </div>
    );
};

export default FormComponent;

