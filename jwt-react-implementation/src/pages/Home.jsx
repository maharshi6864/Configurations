import { Navigate } from "react-router-dom";
import Login from "./Login";

const Home = () => {
  const authentication = localStorage.getItem("authentication");
  console.log(authentication);
  if (authentication === null) {
    return <Navigate to="/login" />;
  }
  return <div>Welcome {JSON.parse(authentication).username}</div>;
};

export default Home;
