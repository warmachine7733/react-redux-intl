import * as enMessages from "./lang_packs/en";
import * as hiMessages from "./lang_packs/hi";
import * as guMessages from "./lang_packs/gu";
import * as odMessages from "./lang_packs/od";
import * as taMessages from "./lang_packs/ta";
import * as teMessages from "./lang_packs/te";
import * as beMessages from "./lang_packs/be";
import * as kaMessages from "./lang_packs/ka";

let initialState = {
  lang: "en",
  languageFullName: "English",
  messages: enMessages.default
};

export const intl = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      switch (action.language) {
        case "ta":
          return {
            ...state,
            lang: "ta",
            languageFullName: "tamil",
            messages: taMessages.default
          };
        case "od":
          return {
            ...state,
            lang: "or",
            languageFullName: "odia",
            messages: odMessages.default
          };
        case "en":
          return {
            ...state,
            lang: "en",
            languageFullName: "english",
            messages: enMessages.default
          };

        case "hi":
          return {
            ...state,
            lang: "hi",
            languageFullName: "हिंदी",
            messages: hiMessages.default
          };

        case "gu":
          return {
            ...state,
            lang: "gu",
            languageFullName: "ગુજરાતી",
            messages: guMessages.default
          };
        case "be":
          return {
            ...state,
            lang: "be",
            languageFullName: "bengali",
            messages: beMessages.default
          };
        case "te":
          return {
            ...state,
            lang: "te",
            languageFullName: "telegu",
            messages: teMessages.default
          };
        case "ka":
          return {
            ...state,
            lang: "ka",
            languageFullName: "kannada",
            messages: kaMessages.default
          };

        default:
          return state;
      }

    default:
      return state;
  }
};
