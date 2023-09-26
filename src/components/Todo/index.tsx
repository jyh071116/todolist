import React, { useState } from "react";
import * as S from "./style";
import useTodo from "../../hooks/useTodo";

const Todo = ({ date }: { date: string }) => {
  const [inputValue, setInputValue] = useState("");
  const { todos, addTodo, toggleCheck } = useTodo(date);

  return (
    <>
      {todos.map((todo) => (
        <>
          <S.CheckButton
            isChecked={todo.isChecked}
            onClick={() => toggleCheck(todo.id)}
          />
          <div>{todo.content}</div>
        </>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(inputValue);
          setInputValue("");
        }}
      >
        <input
          autoFocus
          onChange={(e) => setInputValue(e.currentTarget.value)}
          value={inputValue}
          placeholder="Enter를 눌러 제출하세요"
        />
      </form>
    </>
  );
};

export default Todo;
