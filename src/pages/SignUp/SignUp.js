import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const SignUp = () => {
    const { createNewUser, error } = useContext(AuthContext)
    const navigate = useNavigate()
    console.log()
    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createNewUser(email, password)
        event.target.reset();
        navigate("/")
    }
    return (
        <div className="main-container">
            <div className="form-container">
                <div className="form-body">
                    <h2 className="title">Sign Up</h2>

                    <form onSubmit={handleSignup} className="the-form">
                        <label htmlFor="name">Name</label>
                        <input type="name" name="name" id="name" placeholder="Enter your name" />

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
                            <span>Already have an account?</span> <Link className='toggle-link' to="/login">Login</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;