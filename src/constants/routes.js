import Home from '../pages/Home/Home'
import SignUp from '../pages/SignUp/SignUp'
import SignIn from '../pages/SignIn/SignIn'
import Dashboard from '../pages/Dashboard/Dashboard'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/sign-in',
    component: SignIn,
  },
  {
    path: '/sign-up',
    component: SignUp,
  },
]

export default routes
