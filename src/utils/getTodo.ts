const getTodo = (date : string): Array<string> => {
  const res = window.localStorage.getItem(date);
  if (res === null) return [];
  return JSON.parse(res);
};

export default getTodo;