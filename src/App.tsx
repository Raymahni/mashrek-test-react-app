import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserDataScreen from "./pages/UserDataScreen";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserDataScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
