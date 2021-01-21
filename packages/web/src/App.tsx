import React, { useState } from "react";

export default () => {
  return (
    <div>
      <h1>Linga</h1>
      <div>
        lang{" "}
        {["pl", "en"]
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
      </div>
    </div>
  );
};
