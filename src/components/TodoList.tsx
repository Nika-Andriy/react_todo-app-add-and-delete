import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
  tempTodo: Todo | null;
  editingTodoId: number | null;
  editTitle: string;
  loadingTodoIds: number[];
  isLoading: boolean;
  onToggle: (todo: Todo) => void;
  onDelete: (todoId: number) => void;
  onStartEdit: (todo: Todo) => void;
  onEditTitleChange: React.ChangeEventHandler<HTMLInputElement>;
  onSaveEdit: (event: React.FormEvent, todo: Todo) => void;
  onCancelEdit: () => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  tempTodo,
  editingTodoId,
  editTitle,
  loadingTodoIds,
  isLoading,
  onToggle,
  onDelete,
  onStartEdit,
  onEditTitleChange,
  onSaveEdit,
  onCancelEdit,
}) => {
  const todosForRendering = tempTodo ? [...todos, tempTodo] : todos;

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {isLoading && (
        <div data-cy="TodoLoader" className="modal overlay">
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div>
      )}

      {todosForRendering.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={editingTodoId === todo.id}
          editTitle={editTitle}
          isLoading={
            loadingTodoIds.includes(todo.id) || tempTodo?.id === todo.id
          }
          onToggle={onToggle}
          onDelete={onDelete}
          onStartEdit={onStartEdit}
          onEditTitleChange={onEditTitleChange}
          onSaveEdit={onSaveEdit}
          onCancelEdit={onCancelEdit}
        />
      ))}
    </section>
  );
};
