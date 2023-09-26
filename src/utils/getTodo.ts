import ITodo from "../interfaces/Todo.interface";

const getTodo = (date : string): Array<ITodo> => {
  const res = window.localStorage.getItem(date);
  if (res === null) return [];
  return JSON.parse(res);
};

export default getTodo;