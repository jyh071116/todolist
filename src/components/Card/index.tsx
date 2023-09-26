import React from "react";
import * as S from "./style";
import changeWeek from "../../utils/changeWeek";
import Todo from "../Todo";

const Card = () => {
  const now = new Date();
  const date = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;

  return (
    <S.Contaier>
      <h1>{date}</h1>
      <S.Day>{changeWeek(now.getDay())}</S.Day>
      <Todo date={date}/>
    </S.Contaier>
  );
};

export default Card;
