import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Login = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
      <div>
        <h1>Welcome to ChatLine</h1>
        <form className="joinForm" action="">
          <input
            variant="outlined"
            label="Your name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            variant="outlined"
            label="Your name"
            onChange={(e) => setRoom(e.target.value)}
          />
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chatRoom?name=${name}&room=${room}`}
          >
            <button className="joinBtn">Join</button>
          </Link>
        </form>
      </div>
    );
}

export default Login
