import { Routes, Route } from "react-router-dom";
import Page_Landing from "../Pages/Home_Page/Page_Landing";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page_Landing />}></Route>
        <Route path="*" element={<h2>Page Not Found</h2>}></Route>
      </Routes>
    </div>
  );
}
