export type Todo = {
  id: string;
  title: string;
  checked: boolean;
};

export namespace Instance {
  export type GetTodos = () => Todo[];
  export type SetTodos = (payload: Todo[]) => void;
  export type AddTodo = (payload: Todo) => void;
  export type RemoveTodo = (id: string) => void;
  export type ToggleTodo = (id: string) => void;
}

export type TodoListInstance = {
  getTodos: Instance.GetTodos;
  setTodos: Instance.SetTodos;
  addTodo: Instance.AddTodo;
  removeTodo: Instance.RemoveTodo;
  toggleTodo: Instance.ToggleTodo;
};
