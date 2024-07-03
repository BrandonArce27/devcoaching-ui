import { useCallback } from "react";

import _ from "lodash";

import { useGlobalState } from "..";

import LanguageDictionary from "@/shared/languages";

import { DictionaryService, StorageService } from "@/shared/services";

import { GlobalState } from "@/shared/constants";

import { LanguageState, Translator } from "@/shared/types";

import { Language } from "@/shared/generated";

export const useTranslate = () => {
  const [language, setLanguage] = useGlobalState<LanguageState>(
    GlobalState.LANGUAGE
  );
  console.log(language);

  const t: Translator = useCallback(
    (path) => {
      return _.get(
        LanguageDictionary[
          DictionaryService.parseLanguageToDictionaryField(language)
        ],
        path
      );
    },
    [language]
  );

  const switchLanguage = useCallback(
    async (selectedLanguage: Language, isReloadRequired: boolean = false) => {
      await StorageService.setLanguage(selectedLanguage);
      setLanguage(selectedLanguage);

      if (isReloadRequired) window.location.reload();
    },
    [language]
  );

  return { language, setLanguage, switchLanguage, t };
};
