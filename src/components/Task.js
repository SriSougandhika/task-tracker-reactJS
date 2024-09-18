import React from 'react';

const Task = ({ task }) => (
  <div className="task">
    <h4>{task.title}</h4>
    <p>{task.description}</p>
    <p>Priority: {task.priority}</p>
    <p>Status: {task.status}</p>
    <p>User: {task.user}</p>
  </div>
);

export default Task;
