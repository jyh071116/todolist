import { useState } from "react";
import dayjs from "dayjs";
import * as S from "./style";
import changeWeek from "utils/changeWeek";
import Todo from "components/Todo";

const Card = () => {
  const [now, setNow] = useState(dayjs());
  const date = now.format("YYYY년 M월 D일");

  return (
    <S.Contaier>
      <S.ContentBox>
        <h1>{date}</h1>
        <S.Button onClick={() => setNow(now.subtract(1, "day"))}>⬅️</S.Button>
        <S.Button onClick={() => setNow(now.add(1, "day"))}>➡️</S.Button>
      </S.ContentBox>
      <S.Day>{changeWeek(now.get("day"))}</S.Day>
      <Todo date={date} />
    </S.Contaier>
  );
};

export default Card;
