import styled from 'styled-components';

export interface InputBoxProps {
  width?: string;
}

export const InputBox = styled.div<InputBoxProps>`
  display: flex;
  flex: 1;
  height: 40px;

  width: ${(props) => props.width ?? '100%'};
`;
