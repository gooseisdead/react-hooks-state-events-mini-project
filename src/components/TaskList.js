import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  console.log({ tasks })

  const taskObjs = tasks.map((task) => <Task key={task.text} text={task.text} category={task.category} />)

  return (
    <div className="tasks">
      {taskObjs}
    </div>
  );
}

export default TaskList;
