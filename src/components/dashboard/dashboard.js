import React, { useState, useEffect } from 'react';
import './dashboard.css'; 
import { auth, db } from '../../firebase';
import { useHistory } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';

import './dashboard.css'; 

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = auth.currentUser;
  const uid = user ? user.uid : null;
  const history = useHistory();

  useEffect(() => {
    const fetchEventsForToday = async () => {
      try {
        setLoading(true);
        const today = new Date();
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

        const eventsRef = ref(db, `/tasks/${uid}`);
        onValue(eventsRef, (snapshot) => {
          const tasksData = snapshot.val();
          const tasksArray = tasksData ? Object.values(tasksData) : [];
          setEvents(tasksArray.filter(task => task.date.split('T')[0] === today.toISOString().split('T')[0]));
        })

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchEventsForToday();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome to PROTASK Dashboard</h2>
        {user && <p>Hello, {user.email}!</p>}
        <p>{currentTime}</p>
      </div>
      <div className="event-list">
        <h3>Today's Tasks</h3>
        {loading ? (
          <p>Loading events...</p>
        ) : error ? (
          <p>Error loading events: {error.message}</p>
        ) : (
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                {event.task} - {event.date.split('T')[1]}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="dashboard-navigation">
        <button onClick={()=>{history.push('/todolist')}}>Todo List</button>
        <button onClick={()=>{history.push('/calendar')}}>Calendar</button>
        <button onClick={()=>{history.push('/settings')}}>Settings</button>
      </div>
    </div>
  );
};
/*
 const workSchedule = [
    { time: '09:00 AM', event: 'Meeting' },
    { time: '11:00 AM', event: 'Presentation' },
    { time: '01:00 PM', event: 'Lunch' },
    // ... Add more schedule items
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const analyticsChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Data Set',
        data: [12, 19, 3, 5, 2],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      
      <div>
        <h3>Real-time Date and Time</h3>
        <p>Current Date and Time: {currentDate.toLocaleString()}</p>
      </div>
      
      <div>
        <h3>Connected Calendar</h3>
        <Calendar value={selectedDate} onChange={handleDateChange} />
      </div>
      
      <div>
        <h3>To-Do List</h3>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3>Analytics Chart</h3>
        <Line data={analyticsChartData} />
      </div>
      
      <div>
        <h3>Work Day Schedule</h3>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {workSchedule.map((item, index) => (
              <tr key={index}>
                <td>{item.time}</td>
                <td>{item.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

*/
export default Dashboard;

