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
function TopTodo(all of todos) {
  //Ah i've just received 3 todos
  // lowest-priority # is the highest priority
  // let top = todos.reduce(
  //     (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return <Todo title={title} description={description} priority={priority}  />;
}

export default TopTodo;