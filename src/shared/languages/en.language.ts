import { Dictionary } from "@/shared/types";

const EnglishDictionary: Dictionary = {
  login: {
    title: "Log into DevLive!",
    form: {
      submit: "Log in",
      email: "Email",
      password: "Password",
    },
  },
  home: {
    title: "DevLive",
    navbar: {
      home: "Home",
      reward: "Reward",
      profile: "Profile",
      logout: "Logout",
    },
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

export default EnglishDictionary;
