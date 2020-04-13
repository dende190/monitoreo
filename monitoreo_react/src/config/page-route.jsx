import React from 'react';
import { Redirect } from 'react-router';

import Dashboard from './../pages/dashboard/dashboard';
import ListServer from '../pages/listServer/listServer';
import ServersGraph from '../pages/serversGraph/serversGraph'

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
    component: () => <Dashboard />
  },
  {
    path: '/serverInfo',
    title: 'Lista de Servidores',
    exact: true,
    component: () => <ListServer />
  },
  {
    path: '/serverGraph/:id',
    title: 'Grafica de Servidores',
    exact: true,
    component: () => <ServersGraph />
  },
];


export default routes;