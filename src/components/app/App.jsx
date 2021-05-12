import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { ListContainer } from "../../containers/ListContainer.jsx";
import { DetailContainer } from '../../containers/DetailContainer.jsx';



export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Hey Arnold API Viewer!</h1>
        <Link to={'/'}>Home</Link>
          <Switch>
            <Route exact path='/' component={ListContainer} />
            <Route path='/:id'>
              <DetailContainer />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  )
}
