import type{TaskStatus, Task} from '../types/Task';
import {useEffect, useState} from 'react';

interface TaskFormProps {
    onAddTask: (
        title:string,
        description:string,
        status: TaskStatus
    ) => void;
    onEditTask: (
        id:number,
        title:string,
        description:string,
        status: TaskStatus
    ) => void;
    editingTask: Task | null;
}

function TaskForm({ onAddTask, onEditTask, editingTask }: TaskFormProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState<TaskStatus>('pending');

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description);
            setStatus(editingTask.status);
        }}, [editingTask]);

    return (
  <div className="bg-white rounded-2xl shadow-md p-6">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">
      {editingTask ? "✏️ Edit Task" : "➕ Add Task"}
    </h2>

    <div className="space-y-4">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="
          w-full
          px-4
          py-3
          border
          border-gray-300
          rounded-xl
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      <textarea
        placeholder="Task description..."
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        rows={4}
        className="
          w-full
          px-4
          py-3
          border
          border-gray-300
          rounded-xl
          resize-none
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(
            e.target.value as TaskStatus
          )
        }
        className="
          w-full
          px-4
          py-3
          border
          border-gray-300
          rounded-xl
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      >
        <option value="pending">
          Pending
        </option>

        <option value="in-progress">
          In Progress
        </option>

        <option value="completed">
          Completed
        </option>
      </select>

      <button
        className={`
          w-full
          py-3
          rounded-xl
          font-semibold
          text-white
          transition
          ${
            editingTask
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-green-600 hover:bg-green-700"
          }
        `}
        onClick={() => {
          if (
            !title.trim() ||
            !description.trim()
          ) {
            alert(
              "Please fill all fields"
            );
            return;
          }

          if (editingTask) {
            onEditTask(
              editingTask.id,
              title,
              description,
              status
            );
          } else {
            onAddTask(
              title,
              description,
              status
            );
          }

          setTitle("");
          setDescription("");
          setStatus("pending");
        }}
      >
        {editingTask
          ? "Update Task"
          : "Add Task"}
      </button>
    </div>
  </div>
);
}

export default TaskForm;
