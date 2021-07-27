import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from '../../constants/routes'

function Main() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
          )}
        />
      ))}
    </Switch>
  )
}

export default Main