import React from "react";
import styled from "styled-components";
import backgroundImg from "./assets/background.jpg";
import FormContainer from "./components/FormContainer";

const Container = styled.div`
  background: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  padding: 0 2rem;
  height: auto;
  /* width: 100vh;  */
`;

const App = () => {
  return (
    <Container>
      <FormContainer />
    </Container>
  );
};

export default App;
