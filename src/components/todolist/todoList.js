import { useState, useEffect } from 'react'
import './todoList.css'
import Task from './components/Task'
import { auth, db } from '../../firebase';
import { set, ref, onValue, remove, push, update } from "firebase/database";
import { useHistory } from 'react-router-dom';

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    return (
        <div className='error'>
            {message}
        </div>
    )
}

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newName, setNewName] = useState('');
    const [showAll, setShowAll] = useState(false);
    const [newPriority, setNewPriority] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const user = auth.currentUser;
    const uid = user ? user.uid : null;
    const history = useHistory();

    useEffect(() => {
        if (uid) {
            const tasksRef = ref(db, `/tasks/${uid}`);

            onValue(tasksRef, (snapshot) => {
                const tasksData = snapshot.val();
                const tasksArray = tasksData ? Object.values(tasksData) : [];
                const sortedTasks = tasksArray.sort((a, b) => new Date(a.date) - new Date(b.date));
                setTasks(sortedTasks);
            })
        }
    }, [uid]);

    const addTask = (event) => {
        event.preventDefault()
        if (uid) {
            const tasksRef = ref(db, `/tasks/${uid}`);
            const newTaskRef = push(tasksRef);

            const taskObject = {
                task: newName,
                priority: newPriority || 'Low',
                completed: false,
                date: selectedDate,
                id: newTaskRef.key
            };

            set(newTaskRef, taskObject).then(() => {
                const newTask = { ...taskObject };
                setTasks([...tasks, newTask]);
            });
            setNewName('')
            setNewPriority('')
            setSelectedDate('')
        }
    }

    const deleteTask = (id, task) => {
        if (uid) {
            if (window.confirm(`Delete ${task} ?`)) {
                remove(ref(db, `/tasks/${uid}/${id}`))
                    .then(response => {
                        setTasks(tasks.filter(task => task.id !== id))
                        setErrorMessage(
                            `Deleted ${task}`
                        )
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)
                    })
            }
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePriorityChange = (event) => {
        setNewPriority(event.target.value)
    }

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value)
    }

    const tasksToShow = showAll
        ? tasks
        : tasks.filter(task => task.completed === false)

    const toggleCompletedOf = (id) => {
        const task = tasks.find(n => n.id === id)
        const changedTask = { ...task, completed: !task.completed }

        update(ref(db, `tasks/${uid}/${id}`), { completed: changedTask.completed })
            .then(() => {
                setTasks(tasks.map(task => (task.id !== id ? task : changedTask)));
            })
    }

    const goBack = () => {
        history.push('/dashboard')
    }

    return (
        <div className="Page">
            <button onClick={goBack}>back to dashboard</button>
            <h1>To-Do List</h1>
            <Notification message={errorMessage} />
            <div className="addTask">
                <form onSubmit={addTask}>
                    <div>
                        Task: <input value={newName}
                            onChange={handleNameChange} />
                    </div>
                    <label htmlFor="selectOption">Priority: </label>
                    <select id="selectOption" value={newPriority} onChange={handlePriorityChange}>
                        <option value="">--Select--</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <div>
                        Due Date: <input
                            type="datetime-local"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div>
                        <button className={'button'} type="submit">add</button>
                    </div>
                </form>
            </div>
            <p>
                <button className={'button'} onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'not completed' : 'all'}
                </button>
            </p>
            {tasksToShow.length === 0 ? (
                <div className="empty"> No tasks</div >
            ) : (
                <div>
                    {tasksToShow.map(task =>
                        <Task
                            key={task.id}
                            task={task}
                            toggleCompleted={() => toggleCompletedOf(task.id)}
                            deleteTask={deleteTask}
                        />
                    )}
                </div>
            )}
        </div>
    )
}

export default TodoList;
