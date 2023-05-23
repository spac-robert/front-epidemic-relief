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

export interface Account {
  id?: number;
  email: string;
  password: string;
  role: Role;
  //household:Household;
}

export enum Role {
  ADMIN, CUSTOMER
}
