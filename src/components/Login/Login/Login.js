import React from 'react';
import useAuth from '../../../Hooks/useFirebase/useAuth'
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div className="login-container">
            <div>
               <h2>Please Login</h2>
            </div>
            <div className="login-button">
                <button onClick={signInUsingGoogle}>Login with google</button>
            </div>
        </div>
    );
};

export default Login;