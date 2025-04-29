// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use } from "react";
import { Link } from "react-router";
// import { auth } from "../firebase.init";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
  const  {createUser}  = use(AuthContext);
//   console.log(typeof createUser)

  const handelRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => console.log(error));

    createUser(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero bg-base-200 py-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl">Register</h2>
          <div className="card-body">
            <form onSubmit={handelRegistration}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
          <p>
            Already have an account?
            <Link className="underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
