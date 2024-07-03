import { atom } from "recoil";

import { Constants, GlobalState } from "@/shared/constants";

import { LanguageState, UserState } from "@/shared/types";

export const languageState = atom<LanguageState>({
  key: GlobalState.LANGUAGE,
  default: Constants.DEFAULT_LANGUAGE,
});

export const userState = atom<UserState>({
  key: GlobalState.USER,
  default: undefined,
});

export const RecoilStateDictionary = {
  [GlobalState.USER]: userState,
  [GlobalState.LANGUAGE]: languageState,
};
