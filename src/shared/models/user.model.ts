import { ProfileFormValues } from "@/modules/profile/profile.util";

import { DictionaryService } from "@/shared/services";

import {
  Translator,
  UserProfileDescription,
  UserRequestData,
} from "@/shared/types";

class User {
  private t: Translator;

  public data: UserRequestData;

  constructor(t: Translator, data?: ProfileFormValues) {
    this.t = t;
    this.data = data || {};
  }

  get email() {
    return this.data.email;
  }

  get username() {
    return this.data.username;
  }

  get firstName() {
    return this.data.firstName;
  }

  get lastName() {
    return this.data.lastName;
  }

  get language() {
    return this.data.language;
  }

  get fullName() {
    return `${this.data.firstName} ${this.data.lastName}`;
  }

  get firstAndLastName() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
    };
  }

  get profileForm(): ProfileFormValues {
    return {
      email: this.data.email || "",
      username: this.data.username || "",
      firstName: this.data.firstName || "",
      lastName: this.data.lastName || "",
    };
  }

  get profileDescription(): UserProfileDescription {
    return {
      email: this.email,
      username: this.username,
      firstName: this.firstName,
      language: this.formattedLanguage,
    };
  }

  get formattedLanguage() {
    if (this.data.language !== undefined && this.data.language !== null) {
      return this.t(
        `global.language.${DictionaryService.parseLanguageToDictionaryField(
          this.data.language
        )}`
      );
    } else {
      return "Language not specified";
    }
  }

  static processCurrentUser(
    currentUser: UserRequestData,
    t: Translator
  ): ProfileFormValues {
    return {
      firstName: currentUser.firstName ?? "",
      lastName: currentUser.lastName ?? "",
      email: currentUser.email ?? "",
      username: currentUser.username ?? "",
    };
  }
}

export default User;
