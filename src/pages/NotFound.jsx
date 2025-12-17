import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  color: var(--color-white);
`;

const Text = styled.p`
  color: var(--color-gray);
  margin-bottom: 20px;
`;

const BackLink = styled(Link)`
  color: var(--color-white);
  border: 1px solid var(--color-white);
  padding: 10px 16px;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-black);
  }
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Text>The page you are looking for does not exist.</Text>
      <BackLink to="/">⬅ Back to Movies</BackLink>
    </Wrapper>
  );
};

export default NotFound;
