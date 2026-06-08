import type { Task } from "../types/Task";

interface TaskStatsProps {
  tasks: Task[];
}

function TaskStats({ tasks }: TaskStatsProps) {
  const total = tasks.length;
  const pending = tasks.filter(
    (task) => task.status === "pending"
  ).length;
  const inProgress = tasks.filter(
    (task) => task.status === "in-progress"
  ).length;
  const completed = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  const stats = [
    {
      label: "Total Tasks",
      value: total,
      color: "bg-gray-100 text-gray-800",
    },
    {
      label: "Pending",
      value: pending,
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      label: "In Progress",
      value: inProgress,
      color: "bg-blue-100 text-blue-800",
    },
    {
      label: "Completed",
      value: completed,
      color: "bg-green-100 text-green-800",
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        📊 Task Statistics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl shadow-md p-5 text-center hover:shadow-xl transition"
          >
            <p className="text-sm text-gray-500 mb-2">
              {stat.label}
            </p>

            <p className="text-3xl font-bold">
              {stat.value}
            </p>

            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${stat.color}`}
            >
              Status
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskStats;