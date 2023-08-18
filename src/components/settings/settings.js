import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, messaging } from '../../firebase';
import { signOut } from 'firebase/auth'
import './settings.css'
import { getToken, deleteToken } from 'firebase/messaging';

const VAPID_KEY = 'BP_BoND5q_7bjsVlkpFM2xXTmxsxY3LXQ_0kORZt6Sa9rECdTaJuG063As7CVF7QEHlnZaBuSeTL4lPEdCxNxJg';

const Settings = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [showNotifications, setShowNotifications] = useState(false);
    //const [tasks, setTasks] = useState([]);
    const history = useHistory();

    const logout = async () => {
        try {
            await signOut(auth);
            setErrorMessage('You have been signed out.');
            history.push('/');
        }
        catch (error) {
            setErrorMessage(error.message);
        }
    }

    const requestForToken = () => {
        return getToken(messaging, { vapidKey: VAPID_KEY})
          .then((currentToken) => {
            if (currentToken) {
              console.log('current token for client: ', currentToken);
              // Perform any other neccessary action with the token
            } else {
              // Show permission request UI
              console.log('No registration token available. Request permission to generate one.');
            }
          })
          .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
          });
      };

    const toggleNotifications = async () => {
        setShowNotifications(!showNotifications);
        if(!showNotifications) {
            requestForToken();
        }
        if(showNotifications){
            try {
                const currentToken = await getToken(messaging);
                if (currentToken) {
                    await deleteToken(currentToken);
                    console.log('Token deleted');
                }
            } catch (error) {
                console.error('Error deleting token:', error);
            }
        }
    }
/*
    const sendNotification = () =>
    {
        const today = new Date();
        const tasksRef = ref(db, `/tasks/${uid}/`);
        onValue(tasksRef, (snapshot) => {
            const tasksData = snapshot.val();
            const tasksArray = tasksData ? Object.values(tasksData) : [];
            setTasks(tasksArray.map(task => task.date.split('T')[0]));
          })
        tasks.map(task=> {
            if(task.date.split('T')[0] === today.toISOString().split('T')[0]) {
                const payload = {
                    notification: {
                      title: 'Task Reminder',
                      body: 'Remember to complete your task!',
                    },
                    data: {
                      todoId: todoId,
                    },
                  };
          
                  return admin.messaging().sendToDevice(token, payload);
            }
        })
    }*/

    const goBack = () => {
        history.push('/dashboard')
    }

    return (
        <div className = 'Page'>
            <button onClick={goBack}>back to dashboard</button>
            <div className='settings-container'>
                <h1> Settings </h1>
                <button className='click' onClick={toggleNotifications}>
                    Notifications {showNotifications ? 'off' : 'on'}
                </button>
                <br></br>
                <button className='logout' onClick={logout}>Logout</button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
        </div>
    )
}

export default Settings;