// import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/NavBars.jsx/Navbar";
import Page_Landing from "./Pages/Home_Page/Page_Landing";
import Footer from "./Components/NavBars.jsx/Footer";
export default function App() {
  return (
    <div>
      <Navbar />
      {/* <AllRoutes /> */}
      <Page_Landing />

      <Footer />
    </div>
  );
}
