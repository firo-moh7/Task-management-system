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

  return (
    <div className="stats-grid">
  <div className="stat-card">
    <h3>Total</h3>
    <p>{total}</p>
  </div>

  <div className="stat-card pending-card">
    <h3>Pending</h3>
    <p>{pending}</p>
  </div>

  <div className="stat-card progress-card">
    <h3>In Progress</h3>
    <p>{inProgress}</p>
  </div>

  <div className="stat-card completed-card">
    <h3>Completed</h3>
    <p>{completed}</p>
  </div>
</div>
  );
}

export default TaskStats;