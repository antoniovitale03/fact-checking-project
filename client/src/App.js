import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import HandleLogin from "./components/Login/HandleLogin";
import HandleRegistration from "./components/Registration/HandleRegistration";

function App() {
  return (
    <Routes>
        <Route path="/login" element={ <HandleLogin /> } />
        <Route path="/registration" element={ <HandleRegistration /> } />
        <Route path="/*" element={ <Layout /> } />
    </Routes>
  );
}

export default App;
