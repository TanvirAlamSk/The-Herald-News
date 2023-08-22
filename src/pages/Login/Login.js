import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import "./Login.css"

const Login = () => {
    const { userLogin, error, setError } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        userLogin(email, password).then((user) => {
            alert("Login Successful")
            console.log(user)
        }).catch((error) => {
            setError(error)
        })
        event.target.reset();
        navigate(from, { replace: true });

    }
    return (
        <div className="main-container">
            <div className="form-container">
                <div className="form-body">
                    <h2 className="title">Log in</h2>

                    <form onSubmit={handleLogin} className="the-form">

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" />

                        <p>{error}</p>
                        <input type="submit" value="Log In" />

                    </form>
                    {/* <div className="_or">or</div>
                    <div className="social-login">
                        <ul>
                            <li className="google">
                                <button className='google-link'>Google</button>
                            </li> */}
                    {/* <li className="fb">
                                <button className='facebook-link'>Facebook</button>
                            </li> */}
                    {/* </ul>
                    </div> */}

                    <div className="form-footer">
                        <div>
                            <span>Don't have an account?</span> <Link className='toggle-link' to="/signup">Sign Up</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;