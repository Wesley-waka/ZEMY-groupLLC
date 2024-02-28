"use client"
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkblue;
  }
`;


const Button = () => {
  return (
        <StyledButton>Hi from Lambda</StyledButton>
  )
}

export default Button
