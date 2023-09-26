import React, { useState } from "react";
import getTodo from "../../utils/getTodo";
import * as S from "./style";

const Todo = ({ date }: { date: string }) => {
  const [val, setVal] = useState("");
  const todos = getTodo(date);
  return (
    <>
      {todos.map((todo) => (
        <div>{todo.content}</div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.localStorage.setItem(
            date,
            JSON.stringify([{ id: todos.length, content: val }, ...todos]),
          );
          setVal("");
        }}
      >
        <input
          autoFocus
          onChange={(e) => setVal(e.currentTarget.value)}
          value={val}
          placeholder="할 일을 입력하세요"
        />
        <button>제출</button>
      </form>
    </>
  );
};

export default Todo;
