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
    <button className='bg-blue-600 w-48 mx-auto px-2 py-2 text-white rounded-full border-slate-100 hover:bg-white hover:text-burgundy hover:border-burgundy hover:transition-all ' onClick={() => document.getElementById('about_us').scrollIntoView({ behavior: 'smooth' })} style={{
      borderWidth: '1px'
    }}>Learn More</button>
  )
}

export default Button
