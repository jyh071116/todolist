import ITodo from "interfaces/Todo.interface";

const fetchTodos = (date: string): Array<ITodo> => {
  const storedData = window.localStorage.getItem(date);
  if (storedData === null) return [];
  return JSON.parse(storedData);
};

export default fetchTodos;
