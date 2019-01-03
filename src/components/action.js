import { camelCase } from "lodash";
import React from "react";

export const Action = ({ fromShelf, bookId, handleOnClick, title }) => {
  const isSameShelf = name => {
    return name === fromShelf;
  };
  const titleKey = camelCase(title);

  return (
    <option
      value={titleKey}
      disabled={isSameShelf(titleKey)}
      onClick={() =>
        handleOnClick({
          fromShelf: fromShelf,
          toShelf: titleKey,
          bookId: bookId
        })
      }
    >
      {isSameShelf(titleKey) && "✓ "}
      {title}
    </option>
  );
};
