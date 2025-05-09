import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ConfigProvider } from 'antd';
import Dashboard from "./components/Dashboard";
import SignUpSignIn from "./components/Signup";
import Profile from "./components/Profile";

function App() {
  return (
    <ConfigProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignUpSignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
