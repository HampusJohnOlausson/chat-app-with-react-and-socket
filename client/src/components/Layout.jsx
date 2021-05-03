import React from 'react'
import Login from './Login'
import { Route, Switch} from "react-router";
import ChatRoom from './ChatRoom';

const Layout = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/chatRoom" component={ChatRoom} />
        </Switch>
      </div>
    );
}

export default Layout
