import React from 'react';
import Admin from '../pages/Admin';
import Users from '../pages/Users';
import MultiSend from '../pages/MultiSend';
import Mining from '../pages/Mining';
import Withdrawal from '../pages/Withdrawal';
import Airdrop from '../pages/Airdrop';
import Notice from '../pages/Notice';
import SendPoint from '../pages/SendPoint';

const routes = [
  { path: '/', component: <Admin /> },
  { path: '/admin', component: <Admin /> },
  { path: '/users', component: <Users /> },
  { path: '/multi-send', component: <MultiSend /> },
  { path: '/send-point', component: <SendPoint /> },
  { path: '/mining', component: <Mining /> },
  { path: '/withdrawal', component: <Withdrawal /> },
  { path: '/airdrop', component: <Airdrop /> },
  { path: '/notice', component: <Notice /> },
];

export default routes;
