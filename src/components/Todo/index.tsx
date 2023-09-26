import React, { useState } from "react";
import getTodo from "../../utils/getTodo";
import * as S from "./style";

const Todo = ({ date }: { date: string }) => {
  const [val, setVal] = useState("");
  const todos = getTodo(date);

  const postTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.localStorage.setItem(
      date,
      JSON.stringify([
        { id: todos.length, content: val, isChecked: false },
        ...todos,
      ]),
    );
    setVal("");
  };

  return (
    <>
      {todos.map((todo) => (
        <>
          {todo.isChecked ? <div>이미함</div> : <div>안함</div>}
          <div>{todo.content}</div>
        </>
      ))}
      <form onSubmit={(e) => postTodo(e)}>
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
