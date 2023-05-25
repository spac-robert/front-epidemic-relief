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
}
interface RegisterResponse {
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
  numberOfNonVegan: number;
  numberOfVegans: number;
  numberOfPeople: number;
  phone: string;
  representative: string;
  city: string;
  county: string;
}


