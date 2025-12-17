import styled from "styled-components";

export default function MovieCard({ title, release_date, poster_path }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <Card tabIndex={0} aria-label={`${title} released on ${release_date}`}>
      <h1>{title}</h1>
      <h3>Released  {release_date}</h3>
      <img src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
    </Card>
  )
}

const Card = styled.article`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  background: #111;
  margin: 0;
  padding: 0;
  cursor: pointer;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    z-index: 0;
    transform: scale(1);
    transition: transform 180ms ease;
  }

  h1, h3 {
    position: absolute;
    left: 12px;
    right: 12px;
    margin: 0;
    color: #fff;
    z-index: 2;
    text-align: left;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);

    opacity: 0;
    transform: translateY(10px);
    transition: opacity 180ms ease, transform 180ms ease;
  }

  h1 {
   bottom: 22px;
    transform: translateY(-60%);
    font-size: 30px;
    font-weight: 900;
    line-height: 1.1;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  h3 {
    bottom: 22px;
    transform: translateY(20%);
    font-size: 20px;
    font-weight: 400;
  } 
 
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top, 
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.35) 35%,
    rgba(0, 0, 0, 0) 65%
    );
    opacity: 0;
    transition: opacity 180ms ease; 
    z-index: 1;
  }

  &:hover::after {opacity: 1; }
  &:hover h1 {opacity: 1; transform: translateY(-60%); }
  &:hover h3 {opacity: 1; transform: translateY(20%); }
  &:hover img { transform: scale(1.03); }

  /*keyboard accessibility*/
  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset:-3px;
  }

  &:focus-visible::after {opacity: 1; }
  &:focus-visible h1 { opacity: 1; transform: translateY(-60%); }
  &:focus-visible h3 { opacity: 1; transform: translateY(20%); }

  @media (prefers-reduced-motion: reduce) {
    img, h1, h3, &::after { transition: none; }
  }
  `;
