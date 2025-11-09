import {Route, Routes} from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import RegistrationForm from "./components/Registration/RegistrationForm";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
        <Route path="/login" element={ <LoginForm /> } />
        <Route path="/registration" element={ <RegistrationForm /> } />
        <Route path="/*" element={ <Layout /> } />
    </Routes>
  );
}

export default App;
