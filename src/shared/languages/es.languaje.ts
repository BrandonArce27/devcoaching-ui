import { Dictionary } from "@/shared/types";

const SpanishDictionary: Dictionary = {
  login: {
    title: "DevLive",
    form: {
      submit: "Iniciar Sesión",
      email: "Correo Electrónico",
      password: "Contraseña",
    },
  },
  home: {
    title: "Devlive",
  },
  form: {
    error: {
      required: "",
      tooShort: "",
      tooLong: "",
      invalidString: "",
      invalidNumber: "",
      invalidEmail: "",
      invalidPassword: "",
      invalidConfirmPassword: "",
      specialCharacterRequired: "",
      numericDigitRequired: "",
      lowerCaseRequired: "",
      upperCaseRequired: "",
      notSpacesAndSpecialCharacters: "",
    },
  },
  global: {
    language: {
      en: "",
      es: "",
    },
    languagePrefix: {
      en: "",
      es: "",
    },
  },
};

export default SpanishDictionary;
