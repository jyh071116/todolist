import { useState, useEffect, useCallback } from "react";
import fetchTodos from "../utils/fetchTodos";
import ITodo from "../interfaces/Todo.interface";

const useTodo = (date: string) => {
  const [todos, setTodos] = useState<Array<ITodo>>(() => fetchTodos(date));

  useEffect(() => {
    console.log("저장되었습니다");
    window.localStorage.setItem(date, JSON.stringify(todos));
  }, [date, todos]);

  const addTodo = (content: string) => {
    console.log("추가되었습니다", {
      id: todos.length,
      content,
      isChecked: false,
    });
    setTodos([{ id: todos.length, content, isChecked: false }, ...todos]);
  };

  const toggleCheck = (id: number) => {
    console.log("토글되었습니다", id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo,
      ),
    );
  };

  return { todos, addTodo, toggleCheck };
};

export default useTodo;
