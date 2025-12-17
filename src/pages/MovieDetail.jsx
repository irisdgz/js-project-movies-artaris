import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const BackLink = styled(Link)`
  text-decoration: none;
  color: var(--color-white);
  margin-bottom: 16px;
  align-items: right;
  left: 30px;
  top: 5px;
  position: absolute;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    transition: transform 0.3s;
  }

  @media (min-width: 668px) {
    margin-top: 5px;
    margin-left: 50px;
  }
`;

const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 100%)),
    url(${(props) => props.$backgroundUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  color: white;

  @media (max-width: 668px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${(props) => props.$backgroundUrl});
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  align-items: end;
  padding: 8px;
  min-height: 100vh;
  margin-left: 25px;

  @media (min-width: 668px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    align-items: end;
    justify-items: start;
    padding: 50px;
    gap: 20px;
  }
`;

const Poster = styled.img`
  width: 200px;
  border: 5px solid var(--color-white);
  max-width: 300px;
  box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.8);
  justify-self: start;
  margin-top: 30px;
  margin-bottom: 0;

  @media (min-width: 668px) {
    width: 250px;
  }

  @media (min-width: 1024px) {
    width: 300px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  align-self: start;

  @media (min-width: 668px) {
    max-width: 300px;
    align-items: flex-start;
    text-align: left;
    justify-self: start;
  }
  @media (min-width: 668px) {
    margin-top: 650px;
  }
`;

const HeadText = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-right: 18px;

  @media (min-width: 668px) {
    margin-right: 25px;
  }
`;

const Rating = styled.div`
  display: inline-flex;
  background-color: var(--color-white);
  color: var(--color-error);
  padding: 0 5px;
  font-weight: bold;
  font-size: 24px;

  & > span {
    margin-left: 2px;
  }
`;

const Description = styled.p`
  margin-top: 0;
  max-width: 300px;
  width: 90%;
  padding-right: 5px;
  border-bottom: 10px;

  @media (min-width: 668px) {
    font-size: 14px;
    line-height: 1.3;
    width: 400px;
  }
`;

const Message = styled.p`
  color: var(--color-white);
  font-size: 20px;
  text-align: center;
  padding: 40px 20px;
`;

const ErrorMessage = styled.p`
  color: var(--color-error);
  font-size: 20px;
  text-align: center;
  padding: 20px;
`;

const MovieDetail = () => {
  const { id } = useParams(); 
  console.log("MOVIE ID FROM URL:", id);

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  console.log("API KEY:", apiKey);

  useEffect(() => {
    setLoading(true);
    setHasError(false);

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        
        if (!data || data.success === false) {
          setHasError(true);
          setMovie(null);
        } else {
          setMovie(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setLoading(false);
      });
  }, [id, apiKey]);

  // Loading state
  if (loading) {
    return <Message>Loading movie details...</Message>;
  }

  // Error / Not found state 
  if (hasError || !movie) {
    return (
      <main aria-label="Movie Details">
        <ErrorMessage>Sorry, we couldn’t find the movie.</ErrorMessage>
        <Message>
          <Link to="/"> Go back to Movies</Link>
        </Message>
      </main>
    );
  }

  // Building image URLs
  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "";

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";

  return (
    <main aria-label="Movie Details">
      <Background $backgroundUrl={backdropUrl}>
        <Container>
          <BackLink aria-label="Link back to homepage" to="/">
            Back to Movies
          </BackLink>

          {posterUrl && (
            <Poster src={posterUrl} alt={`Movie poster for ${movie.title}`} />
          )}

          <InfoWrapper>
            <HeadText>
              <h1>{movie.title}</h1>
              <Rating>
                ⭐<span>{Math.round(movie.vote_average)}</span>
              </Rating>
            </HeadText>

            <Description>{movie.overview}</Description>
          </InfoWrapper>
        </Container>
      </Background>
    </main>
  );
};

export default MovieDetail;
