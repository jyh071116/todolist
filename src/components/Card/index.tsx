import { useState } from "react";
import dayjs from "dayjs";
import changeWeek from "utils/changeWeek";
import Todo from "components/Todo";
import leftArrow from "assets/leftArrow.svg";
import rightArrow from "assets/rightArrow.svg";
import * as S from "./style";

const Card = () => {
  const [now, setNow] = useState(dayjs());
  const date = now.format("YYYY년 M월 D일");

  return (
    <S.Contaier>
      <S.Day>{changeWeek(now.get("day"))}</S.Day>
      <S.ContentBox>
        <S.Button
          src={leftArrow}
          onClick={() => setNow(now.subtract(1, "day"))}
        />
        <h1>{date}</h1>
        <S.Button src={rightArrow} onClick={() => setNow(now.add(1, "day"))} />
      </S.ContentBox>
      <Todo date={date} />
    </S.Contaier>
  );
};

export default Card;
