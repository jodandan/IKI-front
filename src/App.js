import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import SignupPage from './pages/SignupPage';
import AdminCategoryPage from "./components/NewAdminPage/AdminCategoryPage";
import AdminMenuPage from "./components/NewAdminPage/AdminMenuPage";
import AdminMenuOptionPage from "./components/NewAdminPage/AdminMenuOptionPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/admin" element={<AdminPage />} >
          <Route path="" element={<AdminCategoryPage/>}/>
          <Route path=":category_id" element={<AdminMenuPage />} />
          <Route path=":category_id/:menu_id" element={<AdminMenuOptionPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
