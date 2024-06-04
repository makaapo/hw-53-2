import React from 'react';

interface Props {
    message: string;
    remove: () => void;
}

const AddTask: React.FC<Props> = ({message, remove}) => {
    return (
        <div className="addedTask">
            <p>{message}</p>
            <p className="delete" onClick={remove}>✖</p>
        </div>
    );
};

export default AddTask;
