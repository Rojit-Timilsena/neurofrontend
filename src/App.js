import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Replace this URL with your Railway Django API URL
    const apiUrl = 'https://your-project-name.up.railway.app/api/your-endpoint/';

    axios.get(apiUrl)
      .then(response => {
        setData(response.data); // Set the response data to state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Django API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
