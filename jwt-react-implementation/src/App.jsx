import styles from "../src/css/App.module.css";
import "../src/app.css";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Regsiter from "./pages/Register";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="form-signin w-100 m-auto">
        <BrowserRouter>
          <Routes>
            {" "}
            <Route path="/" Component={Home}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/register" Component={Regsiter}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
