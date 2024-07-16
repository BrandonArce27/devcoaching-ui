import { Language } from "../generated";

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface UserRequestData {
  uuid?: string | null;
  email?: string | null;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  language?: Language | null;
}

export interface UpdateProfileValues {
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  language?: Language;
}

export interface UserProfileDescription {
  email?: string | null;
  firstName?: string | null;
  fullName?: string | null;
  username?: string | null;
  language: string;
}