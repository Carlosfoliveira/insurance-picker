import styled from "styled-components";

export const Button = styled.button`
  width: 8rem;
  padding: 0 1.5rem;
  height: 4rem;
  background: var(--green);
  color: #FFF;
  border-radius: 0.25rem;
  border: 0;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1.5rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;