import { useState } from 'react';
import React from 'react';

import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';



function App() {
    const [showAddTask, setShowAddTask] = useState(true)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Odlazak na doktorski pregled',
            day: '14. lipnja 2022. u 16:00h',
            reminder: true,
        },
        {
            id: 2,
            text: 'Odlazak na stručnu praksu',
            day: '15. lipnja 2022. u 06:00h',
            reminder: true,
        },
        {
            id:3,
            text: 'Odlazak na Foi',
            day: '28. lipnja 2022. u 17:18h',
            reminder: false,
        },
        ])
   
        const addTask = (task) =>{
            const id = Math.floor(Math.random() * 10000) + 1
            const newTask = { id, ...task }
            setTasks([...tasks, newTask])
        }


        const Delete = (id) =>{
            setTasks(tasks.filter((task)=> task.id !== id))
        }

        const toggleReminder = (id) => {
            setTasks(tasks.map((task)=>task.id === id ? { ...task, reminder: !task.reminder} : task))
        }

    return (
        <div className='container'>
          <Header onAdd={()=>setShowAddTask(!showAddTask)}/>
          {showAddTask &&  <AddTask onAdd={addTask}/>}
          {tasks.length > 0 ? (<Tasks tasks={tasks} 
          onDelete={Delete} onToggle={toggleReminder} /> ):('Nema zakazanih zadataka!')}
          
        </div>
        
    );
}
export default App;
