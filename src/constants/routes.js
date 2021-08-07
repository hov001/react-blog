import Home from '../pages/Home/Home'
import SignUp from '../pages/SignUp/SignUp'
import SignIn from '../pages/SignIn/SignIn'
import Dashboard from '../pages/Dashboard/Dashboard'
import SinglePage from '../pages/SinglePage/SinglePage'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/dashboard',
    status: 'private',
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
  {
    path: '/single-page/:id',
    status: 'nested',
    component: SinglePage,
  },
]

export default routes
