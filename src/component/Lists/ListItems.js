// @flow
import * as React from "react";

export const ListItems = (props) => {
  const { todos, removeItem } = props;
  return todos.map((todo, index) => (
    <li key={index} id={index}>
      <span
        className="close"
        id={index}
        onClick={(e) => removeItem(e.currentTarget.id)}
      >
        X
      </span>
      {todo}
    </li>
  ));
};
