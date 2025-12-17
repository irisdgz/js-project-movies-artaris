import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail.jsx";
import Movies from "./pages/Movies.jsx";
import NotFound from "./pages/NotFound.jsx";
import GlobalStyle from "./styling/GlobalStyle.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
