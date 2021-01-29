import React, { useEffect, useState } from "react";
import history from "history/browser";
import T, { DEFAULT_LOCALES, useTranslation } from "@dev/translations";

const getLocales = (location: { hash: string }) => {
  const [path, hash = DEFAULT_LOCALES] =
    decodeURI(location.hash).match(/^#(.+)/) || [];
  return hash;
};

export default () => {
  const [locales, setLocales] = useState(getLocales(history.location));
  const [numPhotos, setNumPhotos] = useState(2);
  const t = useTranslation(locales);

  useEffect(() =>
    // location is an object like window.location
    history.listen(({ location, action, ...rest }) =>
      setLocales(getLocales(location))
    )
  );
  return (
    <section>
      <h1>
        <T id="#linga" {...{ locales }}>
          Linga
        </T>
      </h1>
      <nav>
        <span>{t("Wybierz język", null, "#lang")}</span>
        {` `}
        {["pl-PL", "en-US"]
          .reduce(
            (list, item) => list.concat(list.length ? [null] : [], [item]),
            []
          )
          .map((lang, key) =>
            lang ? (
              <a href={`#${lang}`} key={lang}>
                {lang}
              </a>
            ) : (
              ` | `
            )
          )}
      </nav>
      <T component="article" id="#article" {...{ locales }}>{`# Nagłówek

Paragraf
Paragraf

Paragraf
Paragraf`}</T>
      <label>
        <span>numPhotos</span>
        <select
          value={numPhotos}
          onChange={(e) => setNumPhotos(e.target.value)}
        >
          {[0, 1, 2, 5, 10, 20, 21, 22, 100, 101, 102].map((value, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <p>
        {t(
          `You have {numPhotos, plural,
      =0 {no photos.}
      =1 {one photo.}
      other {# photos.}
    }`,
          { numPhotos },
          "#photos"
        )}
      </p>
      <pre>{JSON.stringify({ locales, numPhotos }, null, 2)}</pre>
    </section>
  );
};
