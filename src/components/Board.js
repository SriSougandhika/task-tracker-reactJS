import React from 'react';
import Column from './Column';

// Function to sort tasks
const sortTasks = (tasks, sortBy) => {
  if (sortBy === 'priority') {
    return tasks.sort((a, b) => b.priority - a.priority);
  }
  if (sortBy === 'title') {
    return tasks.sort((a, b) => a.title.localeCompare(b.title));
  }
  return tasks;
};

const Board = ({ tasks, groupBy, sortBy }) => {
  // Group tasks based on the selected grouping option
  const groupedTasks = groupBy === 'status'
    ? tasks.reduce((acc, task) => {
        acc[task.status] = acc[task.status] || [];
        acc[task.status].push(task);
        return acc;
      }, {})
    : groupBy === 'user'
    ? tasks.reduce((acc, task) => {
        acc[task.user] = acc[task.user] || [];
        acc[task.user].push(task);
        return acc;
      }, {})
    : tasks.reduce((acc, task) => {
        acc[task.priority] = acc[task.priority] || [];
        acc[task.priority].push(task);
        return acc;
      }, {});

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {Object.keys(groupedTasks).map((key) => (
        <Column key={key} title={key} tasks={sortTasks(groupedTasks[key], sortBy)} />
      ))}
    </div>
  );
};

export default Board;
