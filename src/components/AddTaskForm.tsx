import React from 'react';

interface Props {
    addTask: () => void;
    setCurrentTask: (value: string) => void
    currentTask: string;
}

const AddTaskForm: React.FC<Props> = ({addTask, setCurrentTask, currentTask}) => {
    const
        clickSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTask();
        setCurrentTask('');
    };

    return (
        <form className="taskForm" onSubmit={clickSend}>
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentTask(e.target.value)}
                className="input"
                type="text"
                placeholder="Добавить новую задачу"
                value={currentTask}
                required
            />
            <button type="submit" className="btn">
                Добавить
            </button>
        </form>
    );
};

export default AddTaskForm;
