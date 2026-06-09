import type { Task } from "../types/Task";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

function TaskCard({
  task,
  onEdit,
  onDelete,
}: TaskCardProps) {
  const statusLabel = {
    pending: "Pending",
    "in-progress": "In Progress",
    completed: "Completed",
  };


  return (
    <div className="task-card">
  <div className="task-header">
    <h3>{task.title}</h3>

    <span className={`status-badge ${task.status}`}>
      {statusLabel[task.status]}
    </span>
  </div>

  <p className="task-description">
    {task.description}
  </p>

  <div className="task-actions">
    <button
      className="edit-btn"
      onClick={() => onEdit(task)}
    >
      ✏️ Edit
    </button>

    <button
      className="delete-btn"
      onClick={() => onDelete(task.id)}
    >
      🗑 Delete
    </button>
  </div>
</div>
  );
}

export default TaskCard;