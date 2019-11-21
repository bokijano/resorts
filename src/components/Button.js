import styled from "styled-components";

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background: transparent;
  border: 0.04rem solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  font-family: "Lobster", cursive;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: whitesmoke;
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
  }
  &:focus {
    outline: none;
  }
`;

export default ButtonContainer;
