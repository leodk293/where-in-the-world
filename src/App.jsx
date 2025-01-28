import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Country from "./pages/Country";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=" flex flex-col dark:bg-[#222e37]">
      <Header />
      <BrowserRouter>
        <div className=" mt-[10rem] mx-[10%] md:mt-[8rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:countryId" element={<Country />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
