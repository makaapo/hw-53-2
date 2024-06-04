import React, {useState} from "react";
import AddTaskForm from "./components/AddTaskForm";
import AddTask from './components/AddTask';
import './App.css';

interface Props {
  task: string;
  id: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Props[]>([
    {task: "Hello", id: Math.random().toString()},
    {task: "World", id: Math.random().toString()},
  ]);

  const [currentTask, setCurrentTask] = useState<string>('');

  const removeTask = (index: number) => {
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  };

  const addTask = () => {
    if (currentTask !== '') {
      const newTask = {task: currentTask, id: Math.random().toString()};
      setTasks([...tasks, newTask]);
      setCurrentTask('');
    }
  };

  const printMessage = tasks.map((task, index) => (
      <AddTask key={task.id} message={task.task} remove={() => removeTask(index)} />
  ));

  return (
      <div className="tasks">
        <AddTaskForm addTask={addTask} setCurrentTask={setCurrentTask} currentTask={currentTask}/>
        {printMessage}
      </div>
  );
};

export default App;
