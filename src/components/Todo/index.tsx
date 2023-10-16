import React, { useState } from "react";
import * as S from "./style";
import useTodo from "hooks/useTodo";
import TodoItem from "components/TodoItem";

const Todo = ({ date }: { date: string }) => {
  const [inputValue, setInputValue] = useState("");
  const { todos, addTodo, removeTodo, toggleCheck } = useTodo(date);
  const completed = todos.filter((todo) => todo.isChecked === true);

  return (
    <>
      {todos
        .filter((todo) => todo.isChecked === false)
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleCheck={toggleCheck}
          />
        ))}
      <S.InsertForm
        onSubmit={(e) => {
          e.preventDefault();
          if (inputValue) {
            addTodo(inputValue);
            setInputValue("");
          }
        }}
      >
        <S.Button />
        <S.Input
          autoFocus
          onChange={(e) => setInputValue(e.currentTarget.value)}
          value={inputValue}
          placeholder="작업 추가"
        />
      </S.InsertForm>
      {completed.length !== 0 && <S.Complete>완료됨</S.Complete>}
      {completed.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleCheck={toggleCheck}
        />
      ))}
    </>
  );
};

export default Todo;
