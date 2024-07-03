import { Leaves } from ".";

import { Language } from "../generated";

export type Translator = (path: DictionaryLeaves) => string;

export interface LanguageOption {
  label: DictionaryLeaves;
  value: Language;
}

export interface Dictionary {
  global: {
    language: {
      en: string;
      es: string;
    };
    languagePrefix: {
      en: string;
      es: string;
    };
  };
  form: {
    error: {
      required: string;
      tooShort: string;
      tooLong: string;
      invalidString: string;
      invalidNumber: string;
      invalidEmail: string;
      invalidPassword: string;
      invalidConfirmPassword: string;
      specialCharacterRequired: string;
      numericDigitRequired: string;
      lowerCaseRequired: string;
      upperCaseRequired: string;
      notSpacesAndSpecialCharacters: string;
    };
  };
  home: {
    title: string;
  };
  login: {
    title: string;
    form: {
      submit: string;
      email: string;
      password: string;
    };
  };
}

export type ErrorTypeDictionary = {
  notAuthorizedException: string;
  versionMismatchException: string;
  usernameExistsException: string;
  emailExistsException: string;
  userNotConfirmedException: string;
  limitExceededException: string;
  expiredCodeException: string;
  codeMismatchException: string;
  defaultError: string;
};

export type LanguageDictionary = {
  en: string;
  es: string;
};

export type DictionaryLeaves = Leaves<Dictionary, 4>;
