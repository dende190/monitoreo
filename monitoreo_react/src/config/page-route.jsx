import React from 'react';
import { Redirect } from 'react-router';

import Dashboard from './../pages/dashboard/dashboard';
import ListServer from '../pages/listServer/listServer';
import ServersGraph from '../pages/serversGraph/serversGraph'
import Login from '../pages/user/login';
import Register from '../pages/user/register';

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
  {
    path: '/login',
    title: 'Registro',
    exact: true,
    component: () => <Login />
  },
  {
    path: '/register',
    title: 'Registro',
    exact: true,
    component: () => <Register />
  },
];


export default routes;