import SearchBar from './components/SearchBar';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import TaskStats from './components/TaskStats';
import type { Task } from './types/Task';
import { useEffect, useState } from 'react';
import './App.css';

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
  <div className={darkMode ? "app dark" : "app"}>
  <div className="app-header">
    <h1 className="title">📋 Task Manager</h1>

    <button
      className="theme-btn"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  </div>

  {toast && (
    <div className="toast">
      {toast}
    </div>
  )}

  <TaskForm
    onAddTask={addTask}
    onEditTask={editTask}
    editingTask={editingTask}
  />

  <TaskStats tasks={tasks} />

  <SearchBar
    searchTerm={searchTerm}
    onSearch={setSearchTerm}
  />

  <div className="task-grid">
    {filteredTasks.length === 0 ? (
      <p className="empty-message">
        No tasks found
      </p>
    ) : (
      filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={setEditingTask}
          onDelete={deleteTask}
        />
      ))
    )}
  </div>
</div>
);
}
export default App;