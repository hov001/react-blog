import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  const auth = rest.uid
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
