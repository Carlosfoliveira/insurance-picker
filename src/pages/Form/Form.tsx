import { useNavigate } from 'react-router-dom';
import { Container, ButtonBar } from './styles';
import { Input, Button } from '../../common/components/';
import GenderRadio from './GenderRadio';
import { useCallback, useContext } from 'react';
import { InsuranceContext } from '../../common/contexts';

export function Form() {
  const { insuranceRequest, handleChange, handleSubmit } = useContext(InsuranceContext);
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Container>
      <Input
        id='email'
        name='email'
        type='text'
        label="What's your email?"
        value={insuranceRequest.email}
        onChange={handleChange}
      />
      <Input
        id='age'
        name='age'
        type='number'
        label="How old are you?"
        width='8rem'
        value={insuranceRequest.age}
        onChange={handleChange}
      />
      <GenderRadio />
      <ButtonBar>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </ButtonBar>
    </Container>
  )
};
