import React from 'react'
import { Router, Route, Switch } from 'dva/router'

import Index from './routes/Index'
import Setting from './routes/Setting'
import Container from './components/Container'

const RouterConfig = ({ history } = {}) => (
  <Router history={history}>
    <Container>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/setting" exact component={Setting} />
      </Switch>
    </Container>
  </Router>
)

export default RouterConfig
