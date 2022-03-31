import styled from 'styled-components';

export const InnerInput = styled.input`
  border: 1.5px solid grey;
  border-radius: 5px;
  flex-grow: 1;
  outline: none;
  font-size: 16px;
  height: 100%;
  padding: 5px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
