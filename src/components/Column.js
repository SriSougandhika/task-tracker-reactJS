import React from 'react';
import Task from './Task';

const Column = ({ title, tasks }) => (
  <div className="column">
    <h2>{title}</h2>
    {tasks.map(task => (
      <Task key={task.id} task={task} />
    ))}
  </div>
);

export default Column;
