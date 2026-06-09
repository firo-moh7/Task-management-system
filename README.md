📋 Task Manager App

A modern, responsive Task Management Application built with React + TypeScript, featuring full CRUD functionality, real-time search, dark mode, and persistent local storage.

This project is part of my Full-Stack Developer Roadmap (ClientReach Preparation Track).

✨ Features
🧩 Core Functionality
➕ Create new tasks (title, description, status)
✏️ Edit existing tasks
❌ Delete tasks instantly
📊 Task statistics overview
🔍 Smart Search
Real-time filtering by task title
Case-insensitive search
Instant UI updates
🌙 UI Experience
Dark / Light mode toggle
Smooth UI transitions
Toast notifications for actions (Add, Edit, Delete)
💾 Data Persistence
LocalStorage integration
Automatic save on every change
Persistent dark mode preference
🖼️ Screenshots

Add your screenshots in a /screenshots folder and update paths below

🏠 Main Dashboard

➕ Add Task Form

🌙 Dark Mode

🔍 Search Feature

🛠️ Tech Stack
⚛️ React (Functional Components)
🟦 TypeScript
🎣 React Hooks (useState, useEffect)
🎨 CSS3 (Custom Styling)
💾 LocalStorage API
📁 Project Structure
src/
│
├── components/
│   ├── SearchBar.tsx
│   ├── TaskCard.tsx
│   ├── TaskForm.tsx
│   ├── TaskStats.tsx
│
├── types/
│   └── Task.ts
│
├── App.tsx
├── App.css
└── main.tsx
⚙️ Core Logic Highlights
🧠 State Management
tasks → stores all task data
editingTask → handles edit mode
searchTerm → controls filtering
darkMode → UI theme state
toast → user feedback system
🔄 CRUD Operations
➕ Add Task

Creates a new task with unique ID and adds it to state.

✏️ Edit Task

Updates task using immutable map() pattern.

❌ Delete Task

Removes task using filter() by ID.

🔍 Search System

Dynamic filtering:

Live search updates
Case-insensitive matching
Optimized rendering
💾 Persistence Layer
Auto-save tasks to LocalStorage
Load tasks on app startup
Save UI preferences (dark mode)
🌙 Theme System
Toggle dark/light mode
Persistent UI preference
Clean CSS class switching
🎯 What I Learned

This project strengthened my skills in:

React component architecture
TypeScript in real-world apps
State & effect management
UI/UX thinking
LocalStorage persistence patterns
Clean frontend architecture
🚀 Roadmap Context

This project is part of my structured journey toward becoming a Full-Stack Developer aligned with ClientReach requirements:

React + TypeScript Foundation ✔
Next.js (Upcoming)
Node.js + Express APIs
PostgreSQL + Prisma
TanStack Query
ShadCN UI
Full-stack capstone project
📌 Future Improvements
 Drag & drop task ordering
 Backend API integration
 User authentication
 Task categories & tags
 Due dates + reminders
 Animations (Framer Motion)
🧑‍💻 Author

Built by an aspiring full-stack developer on a structured roadmap toward ClientReach readiness.

📎 Status

✔ Completed — Phase 1 (React + TypeScript Foundation)

⭐ If you like this project

Feel free to star ⭐ the repo or check out my upcoming projects in this roadmap.