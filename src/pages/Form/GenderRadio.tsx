import { memo, useContext } from "react";
import { RadioOption } from '../../common/components/';
import { InsuranceContext } from "../../common/contexts";
import { Gender } from '../../common/domain';

function GenderRadio() {
  const { insuranceRequest, handleChange } = useContext(InsuranceContext);

  return (
    <div>
      <label>What is your gender?</label>
      <RadioOption
        id="male"
        name="gender"
        label="Male"
        value={Gender.Male}
        checked={insuranceRequest.gender === Gender.Male}
        onChange={handleChange}
      />
      <RadioOption
        id="female"
        name="gender"
        label="Female"
        value={Gender.Female}
        checked={insuranceRequest.gender === Gender.Female}
        onChange={handleChange}
      />
    </div>
  );
};

export default memo(GenderRadio);
