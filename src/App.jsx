import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'; 
import './App.css';
import AddTask from './addTask.jsx';
import TaskList from './taskList.jsx';


// utilise_trois_gestionnaires_d_événements_différents_pour_ajouter_supprimer_et_modifier_des_tâches
let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Apprendre react ', done: true},
  {id: 1, text: 'Lire dune ', done: false},
  {id: 2, text: 'Aller au restaurant ', done: false},
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <h1>Taches</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

