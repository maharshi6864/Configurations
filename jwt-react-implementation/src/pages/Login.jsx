import { useRef, useState } from "react";
import Home from "./Home";
import { Navigate } from "react-router-dom";

const Login = () => {
  const email = useRef();

  const password = useRef();

  const [redirect, setRedirect] = useState(false);

  const response = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8089/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "true",
      },
      credentials: "include",
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    });

    const content = await response.json();
    if (content.username === email.current.value) {
      localStorage.setItem("authentication", JSON.stringify(content));
      console.log("authenticated");
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form className="my-5">
      <h1 className="h3 mb-3 fw-normal">Please Login</h1>

      <div className="my-3">
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={email}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            ref={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
      </div>

      <button
        className="btn btn-primary w-100 py-2"
        type="submit"
        onClick={response}
      >
        Login
      </button>
    </form>
  );
};

export default Login;
