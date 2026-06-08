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

  const statusStyles = {
    pending:
      "bg-yellow-100 text-yellow-800",
    "in-progress":
      "bg-blue-100 text-blue-800",
    completed:
      "bg-green-100 text-green-800",
  };

  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        p-5
        hover:shadow-xl
        transition-all
        duration-300
        border
        border-gray-100
      "
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800">
          {task.title}
        </h3>

        <span
          className={`
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            ${statusStyles[task.status]}
          `}
        >
          {statusLabel[task.status]}
        </span>
      </div>

      <p className="text-gray-600 mb-5">
        {task.description}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => onEdit(task)}
          className="
            flex-1
            bg-blue-600
            text-white
            py-2
            rounded-lg
            font-medium
            hover:bg-blue-700
            transition
          "
        >
          ✏️ Edit
        </button>

        <button
          onClick={() =>
            onDelete(task.id)
          }
          className="
            flex-1
            bg-red-600
            text-white
            py-2
            rounded-lg
            font-medium
            hover:bg-red-700
            transition
          "
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;