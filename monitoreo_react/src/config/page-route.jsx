import React from 'react';
import { Redirect } from 'react-router';

import DashboardV2 from './../pages/dashboard/dashboard-v2.js';
import ListServer from '../pages/listServer/listServer';
import UIModalNotification from './../pages/ui/ui-modal-notification.js';
import TableBasic from './../pages/table/table-basic.js';
import TableData from './../pages/table/table-data.js';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to='/'/>
  },
  {
    path: '/',
    title: 'Home',
    exact: true,
    component: () => <DashboardV2 />
  },
  {
    path: '/serverInfo',
    title: 'Lista de Servidores',
    exact: true,
    component: () => <ListServer />
  },
];


export default routes;