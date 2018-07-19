import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import Index from './routes/Index'
import Container from './components/Container'

const Setting = () => (<div>Setting</div>)
const RouterConfig = ({ history } = {}) => {
  return (
    <Router history={history}>
      <div>
        <Container>
          <Switch>
            <Route path="/setting" exact component={Setting} />
            <Route path="/" exact component={Index} />
          </Switch>
        </Container>
      </div>
    </Router>
  )
}

export default RouterConfig
