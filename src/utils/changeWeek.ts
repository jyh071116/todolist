const changeWeek = (numWeek: number) => {
  switch (numWeek) {
    case 0:
      return "일요일";
    case 1:
      return "월요일";
    case 2:
      return "화요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
    default:
      return "알 수 없는 요일 정보입니다!";
  }
};

export default changeWeek;
