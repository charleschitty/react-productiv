import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

// fed {title,description,priority} of a single todo
function EditableTodo() {

  /** Toggle if this is being edited */
  function toggleEdit() {
    //if edit button clicked display form --> boolean
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    //remove(id)
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    //evt.preventdefault()
    //update(formData)
  }

  //when  toggleEdit false --> dont show todoform
// if (toggleEdit) ? TodoForm handlesave={handlesave} title={todo.title} descr = {todo.descr}: or all this daata below
  return (
      <div className="EditableTodo">

                EITHER

                <TodoForm />

                OR

                <div className="mb-3">
                  <div className="float-end text-sm-end">
                    <button
                        className="EditableTodo-toggle btn-link btn btn-sm"
                        onClick={toggleEdit}>
                      Edit
                    </button>
                    <button
                        className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                        onClick={handleDelete}>
                      Del
                    </button>
                  </div>
                  <Todo />
                </div>

      </div>
  );
}

export default EditableTodo;
