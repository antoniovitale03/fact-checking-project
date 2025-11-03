import './CSS/App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/registration" element={ <Registration /> } />
      <Route path="/*" element={ <Layout /> } />
    </Routes>
  );
}

export default App;
