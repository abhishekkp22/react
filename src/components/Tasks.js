import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let token = sessionStorage.getItem('token');
    let config = {
      headers: {
        'x-auth-token': token
      }
    };
    axios
      .get('http://localhost:5000/api/tasks', config)
      .then(response => {
        setTasks(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log('error ', error);
      });
  }, []);
  return (
    <div>
      <h1>Task List </h1>
      {tasks.map(task => {
        return (
          <div>
            <h2>{task.title}</h2>
            <p>(task.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
