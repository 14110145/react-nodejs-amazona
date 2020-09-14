import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";

function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  console.log(userSignin);
  const { loading, error, userInfo } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  

  useEffect(() => {
    if (userInfo.name) {
      props.history.push("/");
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo.name]);

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Sign-In</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="button primary full-width">
              Signin
            </button>
          </li>
          <li>New to amazona?</li>
          <li>
            <Link to="/register" className="button secondary text-center">
              Create account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SigninScreen;
