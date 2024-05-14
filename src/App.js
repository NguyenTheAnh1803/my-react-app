import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import các thành phần từ react-router-dom

import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
const App = () => {
  return (
    <Router>
      <Header /> {/* Đặt Header bên trong Router */}
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* Định nghĩa các Route khác nếu cần */}
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
