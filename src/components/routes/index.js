import React from 'react';
import { Redirect } from 'react-router-dom'

import App from '../App';
import Index from '../templates/pages/index.jsx';
import Cabinet from '../templates/pages/cabinet.jsx';
import Login from '../templates/pages/login.jsx';
import Settings from '../templates/pages/settings.jsx';
import Faq from '../templates/pages/faq.jsx';
import Plan from '../templates/pages/plan.jsx';
import NotFound from './NotFound';

import AuthHoc from '../HOC/authHoc';



const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: Index
      },
      { path: '/cabinet',
        component: AuthHoc(Cabinet)
      },
      { path: '/login',
        component: Login
      },
      { path: '/settings',
        component: Settings
      },
      { path: '/faq',
        component: Faq
      },
      { path: '/plan',
        render: () => (<Redirect to='/plan/create-time' />)
      },
      { path: '/plan/:section',
        component: Plan
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
