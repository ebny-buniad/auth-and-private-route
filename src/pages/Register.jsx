import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200 py-10">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='text-2xl'>Register</h2>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                    <p>Already have an account? <Link className='underline' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;