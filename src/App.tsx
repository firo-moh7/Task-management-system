import SearchBar from './components/SearchBar';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import TaskStats from './components/TaskStats';
import type { Task } from './types/Task';
import { useEffect, useState } from 'react';

function App(){
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [toast, setToast] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(()=>{
    const saved = localStorage.getItem("darkMode");
    return saved? JSON.parse(saved) : false
  });
  useEffect(()=>{
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  },[darkMode]);



  const addTask = (title: string, description: string, status: Task['status']) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status
    };
    setTasks([...tasks, newTask]);
    setToast("✅ Task Added");
  }

  const editTask = (
    id: number,
    title: string,
    description: string,
    status: Task['status']
  ) => {
    setTasks(tasks.map((task)=> task.id ===id ? {
       ...task, title, description, status 
      } : task));

    setEditingTask(null);
     setToast("✏️ Task Updated");

  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setToast("❌ Task Deleted");
  };

  const filteredTasks = tasks.filter((task)=>
     task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
  <div
    className={`min-h-screen transition-colors duration-300 ${
      darkMode
        ? "bg-slate-900 text-white"
        : "bg-slate-100 text-slate-900"
    }`}
  >
    {/* Header */}
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">
          📋 Task Manager
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Toast */}
      {toast && (
        <div className="mb-6 bg-green-500 text-white px-4 py-3 rounded-lg shadow-md">
          {toast}
        </div>
      )}

      {/* Form */}
      <div
        className={`rounded-2xl p-6 shadow-lg mb-8 ${
          darkMode
            ? "bg-slate-800"
            : "bg-white"
        }`}
      >
        <TaskForm
          onAddTask={addTask}
          onEditTask={editTask}
          editingTask={editingTask}
        />
      </div>

      {/* Search */}
      <div
        className={`rounded-2xl p-4 shadow-lg mb-8 ${
          darkMode
            ? "bg-slate-800"
            : "bg-white"
        }`}
      >
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
        />
      </div>

      {/* Stats */}
      <div className="mb-8">
        <TaskStats tasks={tasks} />
      </div>

      {/* Task List */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Tasks
        </h2>

        {filteredTasks.length === 0 ? (
          <div
            className={`text-center p-10 rounded-xl ${
              darkMode
                ? "bg-slate-800"
                : "bg-white"
            }`}
          >
            <p className="text-lg text-gray-500">
              No tasks found.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={setEditingTask}
                onDelete={deleteTask}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);
}
export default App;