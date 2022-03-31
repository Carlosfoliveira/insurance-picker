import { memo, MouseEvent, useCallback } from "react";
import { Checkbox } from "../../../../common/components";
import { Insurance } from "../../../../common/domain";
import { CheckboxCell, TableRow } from "./styles";

export interface InsuranceRowProps {
  insurance: Insurance;
  checked: boolean;
  onClick: (value: number) => void;
}

function InsuranceRow(props: InsuranceRowProps) {
  const { insurance, checked, onClick } = props;

  const handleClick = useCallback((e: MouseEvent<any>) => {
    onClick(insurance.number);
  }, [insurance.number, onClick]);

  return (
    <TableRow id={`${insurance.number}`} onClick={handleClick}>
      <td width={40}>
        <CheckboxCell>
          <Checkbox type="checkbox" className={`insurance-option-${insurance.number}`} onChange={() => { }} checked={checked} />
        </CheckboxCell>
      </td>
      <td>{insurance.description}</td>
      <td>${insurance.price}</td>
    </TableRow>
  );
}

export default memo(InsuranceRow);
