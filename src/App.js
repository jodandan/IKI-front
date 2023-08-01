import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import SignupPage from './pages/SignupPage';
import AdminMenuPage from "./components/NewAdminPage/AdminMenuPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/:category_id" element={<AdminMenuPage />} />
      </Routes>
    </div>
  );
}

export default App;
