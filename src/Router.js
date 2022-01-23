import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Error from "./pages/Error";
import Main from "./pages/Main";
import Search from "./pages/Search";
import WatchList from "./pages/WatchList";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search/details/:id" element={<Details />} />
          <Route path="/watchlist/details/:id" element={<Details />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/search" element={<Search />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
