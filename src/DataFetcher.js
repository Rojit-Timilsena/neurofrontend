import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);

  // GET request to fetch data
  useEffect(() => {
    const apiUrl = 'https://your-railway-app.up.railway.app/api/data/';

    axios.get(apiUrl)
      .then(response => {
        setData(response.data); // Set the response data to state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // POST request to send data to the backend
  const postData = async () => {
    const apiUrl = 'https://your-railway-app.up.railway.app/api/data/'; // Replace with your actual API URL
    const postData = { key: 'value' }; // Replace with your data to be sent to the backend

    try {
      const response = await axios.post(apiUrl, postData);
      setResponseMessage('POST success: ' + response.data); // You can set any response message here
    } catch (error) {
      console.error('Error posting data:', error);
      setResponseMessage('Error posting data: ' + error.message); // Handle errors
    }
  };

  return (
    <div>
      <h1>Data from Django API (GET request)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h2>Send Data to Django API (POST request)</h2>
      <button onClick={postData}>Send POST Request</button>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default MyComponent;
