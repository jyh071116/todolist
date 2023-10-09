import ITodo from "./Todo.interface";

export default interface ITodoItemProps {
  todo: ITodo;
  removeTodo: (contentId: number) => void;
  toggleCheck: (contentId: number) => void;
}
