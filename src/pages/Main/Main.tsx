import { useNavigate } from "react-router-dom";
import { Button } from "../../common/components";
import InsuranceTable from "./components/InsuranceTable/InsuranceTable";
import { Container } from './styles';

export function Main() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  }

  return (
    <Container>
      <InsuranceTable />
      <Button onClick={handleClick}>Next</Button>
    </Container>
  );
}
