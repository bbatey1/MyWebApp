import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5217/api/tasks")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title} — {t.isCompleted ? "Completed" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
