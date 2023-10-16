import { useState, useEffect } from "react";
import fetchTodos from "utils/fetchTodos";
import ITodo from "interfaces/Todo.interface";

const useTodo = (date: string) => {
  const [todos, setTodos] = useState<Array<ITodo>>(() => fetchTodos(date));

  useEffect(() => {
    setTodos(() => fetchTodos(date));
  }, [date]);

  useEffect(() => {
    window.localStorage.setItem(date, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (content: string) => {
    const maxId = Math.max(...todos.map((todo) => todo.id));
    setTodos([
      {
        id: maxId !== -Infinity ? maxId + 1 : 0,
        content,
        isChecked: false,
      },
      ...todos,
    ]);
  };

  const removeTodo = (contentId: number) => {
    let updateTodo = todos.filter((todo) => todo.id !== contentId);
    setTodos(updateTodo);
  };

  const toggleCheck = (contentId: number) => {
    let updateTodo = todos.map((todo) =>
      todo.id === contentId ? { ...todo, isChecked: !todo.isChecked } : todo,
    );
    setTodos(updateTodo);
  };

  return { todos, addTodo, removeTodo, toggleCheck };
};

export default useTodo;
