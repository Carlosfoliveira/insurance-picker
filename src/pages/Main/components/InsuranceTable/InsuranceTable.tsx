import { memo, ReactElement, useContext } from "react";
import { InsuranceContext } from "../../../../common/contexts";
import { insuranceOptions } from "../../../../common/domain";
import InsuranceRow from "./InsuranceRow";
import { Table } from "./styles";

function InsuranceTable(): ReactElement {
  const { insuranceRequest, selectInsurance } = useContext(InsuranceContext);

  return (
    <Table>
      <thead>
        <tr>
          <th />
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(insuranceOptions).map((insurance) => (
          <InsuranceRow
            key={insurance.number}
            insurance={insurance}
            checked={insurance.number === insuranceRequest.insurance?.number}
            onClick={selectInsurance}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default memo(InsuranceTable);
