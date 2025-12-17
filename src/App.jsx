import MovieCard from "./components/movie-card.jsx";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=d4bf612b9cd232a305095645997f202b&language=en-US&page=1";

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <GlobalStyle />
    <Page>
      <SrOnly as="h1">Popular movies</SrOnly>

      <Grid role="list" aria-label="Popular movies">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
      </Grid>
    </Page>
    </>
  );
};

const Page = styled.main`
min-height: 100vh;
background: #000;
`;

const Grid = styled.ul`
margin: 0;
padding: 0;
list-style: none;

width: 100% ;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 0;

@media (max-width: 1100px) {
  grid-template-columns: repeat(3, 1fr);
}
  
@media (max-width: 700px) {
  grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;  

const SrOnly = styled.span`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border: 0;
`;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html, body{
    height: 100%;
    margin: 0;
    padding: 0;
    background: #000;
  }

  #root {
    height: 100%;
    margin: 0;
    padding: 0; 
    max-width: none;
  }
  
  body { overflow-x: hidden; }
`;


export default App;