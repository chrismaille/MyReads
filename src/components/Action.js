import { camelCase } from "lodash";
import React from "react";

const Action = ({ fromShelf, book, handleOnClick, title }) => {
  const isSameShelf = name => name === fromShelf;
  const titleKey = camelCase(title);

  return (
    <option
      value={titleKey}
      disabled={isSameShelf(titleKey)}
      onClick={() =>
        handleOnClick({
          fromShelf,
          toShelf: titleKey,
          book
        })
      }
    >
      {isSameShelf(titleKey) && "✓ "}
      {title}
    </option>
  );
};

export default Action;
