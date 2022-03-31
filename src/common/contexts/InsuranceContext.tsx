import { ChangeEvent, createContext, useState } from 'react';
import { insuranceOptions, InsuranceRequest } from '../domain';
import api from '../services/api';

export interface InsuranceContextInterface {
  insuranceRequest: InsuranceRequest;
  handleChange: (e: ChangeEvent<any>) => void;
  selectInsurance: (value: number) => void;
  handleSubmit: () => Promise<void>;
};

export const InsuranceContext = createContext({} as InsuranceContextInterface);

export function InsuranceProvider({ children }: { children: React.ReactNode }) {
  const [insuranceRequest, setInsuranceRequest] = useState({
    email: '',
    age: '',
  } as InsuranceRequest);

  function handleChange(e: any) {
    const { name, value } = e.target;

    setInsuranceRequest({
      ...insuranceRequest,
      [name]: value
    });
  }

  function selectInsurance(value: number) {
    setInsuranceRequest({
      ...insuranceRequest,
      insurance: insuranceRequest.insurance?.number !== value ? Object.values(insuranceOptions)[value - 1] : undefined,
    });
  }

  async function handleSubmit() {
    await api.post('/', JSON.stringify(insuranceRequest));
  }

  return (
    <InsuranceContext.Provider value={{ insuranceRequest, handleChange, selectInsurance, handleSubmit }}>
      {children}
    </InsuranceContext.Provider>
  );
}
