import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

const storedUser = localStorage.getItem('user');

export const USER_ID = storedUser ? JSON.parse(storedUser).id : null;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

// Add more methods here
export const postTodo = (data: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', data);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const patchTodo = ({ id, completed, title }: Todo) => {
  return client.patch<Todo>(`/todos/${id}`, { completed, title });
};
