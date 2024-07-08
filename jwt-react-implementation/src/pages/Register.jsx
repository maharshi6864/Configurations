import { useRef, useState } from "react";
import Login from "./Login";

const Regsiter = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const [redirect, setRedirect] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    console.log(username.current.value);
    const response = await fetch("http://localhost:8089/addUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWhhcnNoaSIsImlhdCI6MTcyMDAxNDk1MCwiZXhwIjoxNzIwMDMyOTUwfQ.knz1KdQkEjpEKMN0baZKXV8tB1AZHwujmllMc0ZypG77dwc4ThOAk3vQKw6lh0tLgt91gjAk_3U2VEl1TNKHjQ",
      },
      body: JSON.stringify({
        userId: email.current.value,
        name: username.current.value,
        password: password.current.value,
      }),
    });

    const content = await response.json();
    if (content === "User Added Successfully") {
      setRedirect(true);
      localStorage.setItem("authentication", content);
    }
  };
  if (redirect) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <form className="my-5">
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>

        <div className="my-2">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              ref={username}
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              ref={email}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
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
          onClick={submit}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Regsiter;
