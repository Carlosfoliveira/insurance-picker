import { ChangeEvent, memo, ReactElement } from "react";
import { Container } from "./styles/Container";

export interface RadioOptionProps {
  id: string;
  checked: boolean;
  label?: string;
  name?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function RadioOption(props: RadioOptionProps): ReactElement {
  const { id, name, value, label, checked, onChange } = props;

  return (
    <Container>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};

export default memo(RadioOption);
