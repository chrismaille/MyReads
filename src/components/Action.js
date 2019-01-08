import { camelCase } from "lodash";
import React from "react";

const Action = ({ fromShelf, title }) => {
  const isSameShelf = name => name === fromShelf;
  const titleKey = camelCase(title);

  return (
    <option value={titleKey}>
      {isSameShelf(titleKey) && "📚 "}
      {title}
    </option>
  );
};

export default Action;
