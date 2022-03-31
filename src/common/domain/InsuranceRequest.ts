import { Insurance } from "./Insurance";

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE'
};

export interface InsuranceRequest {
  email?: string;
  age?: string;
  gender?: Gender;
  insurance?: Insurance;
};
