import React from 'react';
import TaskCard from './TaskCard';

const TaskBoard = ({ tasks = [] }) => {
  const columns = ['backlog', 'in_progress', 'review', 'completed'];

  return (
    <div className="task-board-grid">
      {columns.map((col) => (
        <div key={col} className="board-column">
          <h3 className="column-title">{col.replace('_', ' ').toUpperCase()}</h3>
          {tasks.filter(t => t.status === col).map(t => (
            <TaskCard key={t._id} task={t} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
