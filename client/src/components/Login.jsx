import React from 'react'
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button, Link, TextField } from '@material-ui/core';

const Login = () => {
    return (
      <div>
        <h1>Welcome to ChatLine</h1>
        <form action="">
          <TextField variant="outlined" label="Your name" />
          <FormControl variant="outlined">
            <Select label="Rooms">
              <option value="">Room 1</option>
              <option value="">Room 2</option>
              <option value="">Room 3</option>
              <option value="">Room 4</option>
            </Select>
          </FormControl>
          <Link to="/chatRoom">
            <Button size="large" variant="contained">
              Join
            </Button>
          </Link>
        </form>
      </div>
    );
}

export default Login
