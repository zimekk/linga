import React from "react";
import IntlMessageFormat from "intl-messageformat";
import { marked } from "marked";

export const DEFAULT_LOCALES = "pl-PL";

const messages = {
  "#article": {
    "en-US": "# Header\n\nParagraph\nParagraph\n\nParagraph\nParagraph",
    "pl-PL": "# Nagłówek\n\nParagraf\nParagraf\n\nParagraf\nParagraf",
  },
  "#lang": {
    "en-US": "Choose language",
    "pl-PL": "Wybierz język",
  },
  "#linga": {
    "en-US": "Linga",
    "pl-PL": "Linga",
  },
  "#photos": {
    "en-US":
      "You have {numPhotos, plural,\n      =0 {no photos.}\n      =1 {one photo.}\n      other {# photos.}\n    }",
    "pl-PL":
      "{numPhotos, plural,\n          =0 {Nie masz zdjęć.}\n          one {Masz jedno zdjęcie.}\n          few {Masz # zdjęcia.}\n          many {Masz # zdjęć.}\n          other {Masz # zdjęcia.}\n        }",
  },
  "#today": {
    "en-US": "Today is",
    "pl-PL": "Dzisiaj jest",
  },
  "#topay": {
    "en-US": "You have to pay",
    "pl-PL": "Do zapłaty masz",
  },
};

// https://formatjs.io/docs/intl-messageformat/
const translate = (message: string, values: object, locales: string) =>
  new IntlMessageFormat(message, locales).format(values);

const addLocalesMessage = (
  id: string,
  locales: string,
  defaultMessage: string
) => {
  if (!messages[id]) {
    messages[id] = {};
  }
  if (!messages[id][locales]) {
    Object.assign(messages[id], {
      [locales]: defaultMessage,
    });
    console.log(Object.fromEntries(Object.entries(messages).sort()));
  }
  return messages[id][locales];
};

const getLocalesMessage = (
  id: string,
  locales: string,
  defaultMessage: string
) =>
  (messages[id] && messages[id][locales]) ||
  addLocalesMessage(id, locales, defaultMessage);

export const useTranslation =
  (locales: string = DEFAULT_LOCALES) =>
  (message: string, values: object, id: string) =>
    translate(getLocalesMessage(id, locales, message), values, locales);

export default ({
  children: message,
  component: Component = "div",
  id,
  locales = DEFAULT_LOCALES,
}: {
  children: string;
  component: React.ElementType;
  id: string;
  locales: string;
}) => (
  <Component
    dangerouslySetInnerHTML={{
      __html: marked(
        translate(getLocalesMessage(id, locales, message), locales)
      ),
    }}
  />
);
