import axios from "axios";
import React, { useEffect, useState } from "react";
const webLink = "https://jsonplaceholder.typicode.com/users";

const Fetcher = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const Waiting = async () => {
      const data = await axios.post(webLink);
      setUsers(data);
      console.log("Nice data you have:", data);
    };
    Waiting();
  }, []);
  if (!users) {
    const renderedUsers = <h1>Nice</h1>;
  } else {
    const renderedUsers = users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }
  return (
    <div>
      <h1>Nice things you have</h1>
      {renderedUsers}
    </div>
  );
};
export default Fetcher;
