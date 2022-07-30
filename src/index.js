import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import ErrorPage from '../src/components/pages/ErrorPage';
import EmployeeListPage from '../src/components/pages/EmployeeListPage';
import LandingPage from "./components/pages/LandingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/employeelist" element={<EmployeeListPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
