import React from 'react';

interface AddTaskFormProps {
    addTask: () => void;
    setCurrentTask: React.Dispatch<React.SetStateAction<string>>;
    currentTask: string;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({addTask, setCurrentTask, currentTask}) => {
    const clickingSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTask();
        setCurrentTask('');
    };

    return (
        <form className="taskForm" onSubmit={clickingSend}>
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentTask(e.target.value)}
                type="text"
                placeholder="Добавить новую задачу"
                value={currentTask}
                required
            />
            <button type="submit">
                Добавить
            </button>
        </form>
    );
};

export default AddTaskForm;
