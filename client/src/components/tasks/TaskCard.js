import React from 'react';

const TaskCard = ({ task }) => (
  <div className={`task-card priority-${task.priority}`}>
    <h4>{task.title}</h4>
    <p>{task.description}</p>
    <div className="task-meta">
      <span className="badge">{task.status}</span>
    </div>
  </div>
);

export default TaskCard;
