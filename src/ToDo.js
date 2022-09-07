const ToDo = ({ todo }) => {
  return (
    <div className={todo.complete ? "strike" : ""}>
      <ul>
        <li>{todo.task}</li>
      </ul>
    </div>
  );
};

export default ToDo;
