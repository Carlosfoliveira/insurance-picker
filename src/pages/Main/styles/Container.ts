import styled from "styled-components";
import { Button } from "../../../common/components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-background-secondary);
  width: 90vw;
  max-width: 700px;
  padding: 15px;
  align-items: flex-start;
  justify-content: center;

  ${Button} {
    align-self: flex-end;
  }
`;