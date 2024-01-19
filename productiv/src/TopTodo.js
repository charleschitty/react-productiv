import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */
// [{title:1,description:d1, priority:1}, {title:2, description:d2, priority:2}]
function TopTodo({todos}) {
  //Ah i've just received 3 todos
  // lowest-priority # is the highest priority
  let top = todos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return <Todo
    id={top.id}
    key={top.id}
    title={top.title}
    description={top.description}
    priority={top.priority}
  />;
}

//TODO: why do we need to put the key in here?

export default TopTodo;