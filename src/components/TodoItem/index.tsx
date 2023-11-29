import ITodoItemProps from "interfaces/TodoItemProps.interface";
import * as S from "./style";

const TodoItem = ({ todo, removeTodo, toggleCheck }: ITodoItemProps) => {
  return (
    <S.TodoLayout key={todo.id}>
      <S.CheckButton
        isChecked={todo.isChecked}
        onClick={() => toggleCheck(todo.id)}
      />
      <S.Text isChecked={todo.isChecked}>{todo.content}</S.Text>
      <S.Delete onClick={() => removeTodo(todo.id)}>삭제</S.Delete>
    </S.TodoLayout>
  );
};
export default TodoItem;
