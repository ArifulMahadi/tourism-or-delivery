import React from 'react';
import useAuth from '../../../Hooks/useFirebase/useAuth'
import { useLocation , useHistory} from "react-router-dom";
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth()
    const location = useLocation();
    const history = useHistory();
    const Redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then (result => {
            history.push(Redirect_uri);
        })
    }
    return (
        <div className="login-container">
            <div>
               <h2>Please Login</h2>
            </div>
            <div className="login-button">
                <button onClick={handleGoogleLogin}>Login with google</button>
            </div>
        </div>
    );
};

export default Login;