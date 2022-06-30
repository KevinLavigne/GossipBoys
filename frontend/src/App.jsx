import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import UserAccount from "./pages/UserAccount";
import Page3 from "./pages/Page3";
import Error404 from "./pages/error404";
import Feedback from "./components/Feedback";
import Disclaimer from "./pages/Disclaimer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Disclaimer />} />
        <Route path="/login" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/:id" element={<Feedback />} />
        <Route path="/user-account" element={<UserAccount />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
