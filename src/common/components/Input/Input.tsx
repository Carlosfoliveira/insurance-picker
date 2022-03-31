import type {
  ChangeEvent,
  ChangeEventHandler,
  ReactElement,
} from 'react';
import { memo, useCallback } from 'react';

import { InputBox, InnerInput, Container } from './styles';

export interface InputProps {
  id: string;
  type: string;
  label?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  width?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onValueChanged?: (value: string) => void;
}

function Input(props: InputProps): ReactElement {
  const {
    id,
    type,
    label,
    value,
    name,
    placeholder,
    className,
    onChange,
    onValueChanged,
    width,
  } = props;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      onChange?.(e);

      if (onValueChanged) {
        const newValue = e.currentTarget.value;

        onValueChanged(newValue);
      }
    },
    [onChange, onValueChanged]
  );

  return (
    <Container>
      {label && <label>{label}</label>}

      <InputBox
        className={className}
        width={width}
      >
        <InnerInput
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </InputBox>
    </Container>
  );
}

export default memo(Input);
