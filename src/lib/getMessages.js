import en from "../../messages/en.json";
import hi from "../../messages/hi.json";
import mr from "../../messages/mr.json";

const dictionaries = {
  en,
  hi,
  mr,
};

export function getMessages(locale) {
  return dictionaries[locale] || dictionaries.en;
}
