import styled from "styled-components";

const primaryColor = "#F24405";
const margin = "1rem";

export const Main = styled.main`
  max-width: 640px;
  height: 100vh;
`;

export const Span = styled.span`
  color: ${primaryColor};
`;

export const Form = styled.form``;

export const Input = styled.input`
  padding: 0.5rem 0.25rem;
  border-style: none none;
  border-bottom: 1px solid black;
  margin: ${margin} 0 ${margin} ${margin};
`;

export const P = styled.p`
  font-size: ${(props) => props.tag && "0.8rem"};
  font-style: ${(props) => props.tag && "italic"};
  margin: ${(props) => props.tag && "0.25rem 0"};
  font-weight: ${(props) => props.bold && "bold"};
`;

export const ButtonLink = styled.button`
  background: lightgrey;
  display: block;
  margin: ${margin} auto;
  padding: 0.25rem;
  border: none;
  cursor: pointer;
  word-wrap: break-word;

  &:hover,
  &:focus {
    background: black;
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.primary ? primaryColor : "lightgrey")};

  border: none;
  padding: 0.5rem;
  margin: 0 0.25rem;
  border-radius: 5%;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover,
  &:focus {
    background: black;
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }
`;
