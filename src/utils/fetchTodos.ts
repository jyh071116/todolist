import ITodo from "../interfaces/Todo.interface";

const fetchTodos = (date: string): Array<ITodo> => {
  console.log("불러왔습니다");
  const storedData = window.localStorage.getItem(date);
  if (storedData === null) return [];
  return JSON.parse(storedData);
};

export default fetchTodos;
