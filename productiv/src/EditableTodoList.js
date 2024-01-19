import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({todos, update, remove}) {
  return (
      <div>
        {todos.map(todo => (
          <EditableTodo
            id={todo.id}
            key={todo.id}
            title={todo.title}
            description={todo.description}
            priority={todo.priority}
            update={update}
            remove={remove}
          />
        ))}
      </div>
  );
}

export default EditableTodoList;
