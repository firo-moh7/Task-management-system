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
  <div className="task-form">
  <h2>
    {editingTask
      ? "✏️ Edit Task"
      : "➕ Add Task"}
  </h2>

  <input
    type="text"
    placeholder="Task title"
    value={title}
    onChange={(e) =>
      setTitle(e.target.value)
    }
  />

  <textarea
    placeholder="Task description"
    value={description}
    onChange={(e) =>
      setDescription(e.target.value)
    }
  />

  <select
    value={status}
    onChange={(e) =>
      setStatus(
        e.target.value as TaskStatus
      )
    }
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
    className="submit-btn"
    onClick={() => {
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

      // reset form
      setTitle('');
      setDescription('');
      setStatus('pending');
    }}
  >
    {editingTask
      ? "Update Task"
      : "Add Task"}
  </button>
</div>
);
}

export default TaskForm;
