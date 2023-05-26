export interface Register {
  id?: number;
  email: string;
  username: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: Account;
  error: string;
}

export interface HouseholdResponse {
  household: Household
  error: string;
}

export interface SaveObjectResponse {
  message: string;
}

export interface LotResponse {
  message: string;
}

export interface Account {
  id?: number;
  email: string;
  password: string;
  role: Role;
  household: Household;
}

export enum Role {
  ADMIN, CUSTOMER
}

export interface Household {
  id: number;
  contactAddress: string;
  numberOfChildren: number;
  numberOfNonVegans: number;
  numberOfVegans: number;
  numberOfPeople: number;
  phone: string;
  representative: string;
  city: string;
  county: string;
}


