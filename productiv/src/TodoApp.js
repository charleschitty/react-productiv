import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp() {//initialTodos input
  // we create a state of todos array initialState = initialTodos
  // arrays initial state is based off the props we receive from app.js
  // we have a setToDo fn here

  /** add a new todo to list */
  function create(newTodo) {
    //let newToDo = {...infoWeGetFromForm?, id = uuid()}
    //setToDo = ...ToDos newToDo
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    //somehow find an existing Todo by id? and edit properties within? description/title
    // (item, id) => id === desiredid ? item.description = newValue : item.description = value
    //setToDo = updates based off id
  }

  /** delete a todo by id */
  function remove(id) {
    //setTodo = removes based off id filter
    //setTodo(todos=>todos.filter(todo => id !== todo.id));
  }

  //TODO: ternary for to do list appearing if exists and not appearing otherwise
  //TODO:AddTodoList

  // TopTodos needs prop todos={todos}
  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            <EditableTodoList /> OR
            <span className="text-muted">You have no todos.</span>
          </div>

          <div className="col-md-6">
            (if no top todo, omit this whole section)
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo/>
            </section>

            <section>
              <h3 className="mb-3">Add Nü</h3>
              FIXME
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;