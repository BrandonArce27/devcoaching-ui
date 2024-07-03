import EnglishDictionary from "./en.language";
//import SpanishDictionary from "./es.language";

import {
  Dictionary,
  LanguageDictionary as LanguageDictionaryObject,
} from "@/shared/types";

const LanguageDictionary: Record<keyof LanguageDictionaryObject, Dictionary> = {
  en: EnglishDictionary,
  es: EnglishDictionary, // TODO: CREATE SPANISH DIC
};

export default LanguageDictionary;
