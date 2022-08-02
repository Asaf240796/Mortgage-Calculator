import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
  max-width: 900px;
  margin: auto;
  position: relative;

  h1 {
    font-size: 35px;
    font-weight: 500;
    color: #2a419f;
    margin-bottom: 10px;
    text-transform: uppercase;

    @media (max-width: 1700px) {
      font-size: 30px;
    }
    //iPhone X || 375 x 812
    @media (min-width: 375px) and (max-width: 812px) {
      top: 8px;
      width: 100%;
      text-align: center;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    margin-top: 3rem;
    background: #fff;
    padding: 3rem;
    color: #2a419f;
    box-shadow: 0 0 1px rgba(8, 11, 14, 0.06),
      0 6px 6px -1px rgba(8, 11, 14, 0.1);
    border-radius: 1.2rem;

    @media (max-width: 1200px) {
      padding: 1rem;
      line-height: 15px;
    }
    //iPhone X || 375 x 812
    @media (min-width: 375px) and (max-width: 812px) {
      left: 0%;
      top: 10%;
    }
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  //mobile adjusment
  @media (max-width: 1700px) {
    font-size: 80%;
  }
  @media (max-width: 1250px) {
    font-size: 70%;
  }
`;

export const InputSection = styled.div`
  width: 45%;
  min-width: 350px;
  max-width: 450px;
  display: flex;
  padding: 1rem;

  label {
    text-transform: uppercase;
    font-weight: 400;
    color: gray;
    margin-bottom: 0.5rem;
  }

  input {
    background: rgba(255, 255, 255, 0.3);
    height: 35px;
    border: none;
    border-radius: 10px;
    padding: 0 1rem;
    color: #2a6279;
    font-weight: 500;
    box-shadow: 0 0 1px rgba(8, 11, 14, 0.06),
      0 6px 6px -1px rgba(8, 11, 14, 0.1);
    transition: all 0.3s ease-in-out;
    &:hover,
    &:focus {
      box-shadow: 0 0 1px rgba(8, 11, 14, 0.06),
        0 16px 16px -1px rgba(8, 11, 14, 0.1);
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: #d8a051;
  color: #fff;
  border: none;
  border-radius: 0.2rem;
  width: 150px;
  height: 36px;
  font-family: "Oswald", sans-serif;
  font-size: 14px;
  letter-spacing: 0.003;
  line-height: 36px;
  box-shadow: 0 0 1px rgba(8, 11, 14, 0.06), 0 6px 6px -1px rgba(8, 11, 14, 0.1);
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 1px rgba(8, 11, 14, 0.06),
      0 16px 16px -1px rgba(8, 11, 14, 0.1);
  }
`;

export const Error = styled.h4`
  color: red;
  font-size: 13px;
  margin-bottom: 1rem;
`;
