import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {

  // lowest-priority # is the highest priority
  let top = todos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return <Todo
    id={top.id}
    key={top.id} //don't need tthe key here unless we're rendering in an array
    title={top.title}
    description={top.description}
    priority={top.priority}
  />;
}

export default TopTodo;