import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from '../../constants/routes'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

function Main({ isAuth, uid }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return route.status === 'private' ? (
          <PrivateRoute
            key={i}
            path={route.path}
            exact={route.exact}
            isAuth={isAuth}
            uid={uid}
          >
            <route.component routes={route.routes} />
          </PrivateRoute>
        ) : (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              // pass the sub-routes down to keep nesting
              <route.component
                {...props}
                routes={route.routes}
                isAuth={isAuth}
                uid={uid}
              />
            )}
          />
        )
      })}
    </Switch>
  )
}

export default Main
