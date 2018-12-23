import Index from './templates/pages/index';

import Private from './templates/pages/private';
import Cabinet from './templates/pages/cabinet';
import Settings from './templates/pages/settings';

import Plan from './templates/pages/plan';
import PlanScheduler from './templates/sections/plan/plan-scheduler';
import PlanCalendar from './templates/sections/plan/plan-calendar';

import Login from './templates/pages/login';
import SignUp from './templates/pages/signup';
import Faq from './templates/pages/faq';
import NotFound from './routes/NotFound';

import AuthHoc from './HOC/authHoc';


const Routes = [
    { path: '/',
      exact: true,
      component: Index
    },

    {
      path: '/private',
      component: (Private),
      routes: [
        { 
          path: '/private/cabinet',
          component: Cabinet
        },
        {
          path: '/private/plan',
          component: Plan,
          routes: [
            {
              path: '/private/plan/create-post',
              component: PlanScheduler
            },
            {
              path: '/private/plan/calendar',
              component: PlanCalendar
            }
          ]
        },
        {
          path: '/private/settings',
          component: Settings
        }
      ]
    },

    { path: '/login',
      component: Login
    },
    { path: '/signup',
      component: SignUp
    },
    { path: '/faq',
      component: Faq
    },
    { path: '*',
      component: NotFound
    }
];

export default Routes;
