import { lazy } from 'react';
const Page1 = lazy(() => import('../ui/Page1'));
const Page2 = lazy(() => import('../ui/Page2'));
const Page3 = lazy(() => import('../ui/Page3'));
const Page4 = lazy(() => import('../ui/Page4'));
const Cake = lazy(() => import('../ui/cakeanimation'));


const routes = [
  {
    path: '/',
    exact: true,
    name: 'Page1',
    component: Page1,
    private: false
  },
  {
    path: '/page2',
    exact: true,
    name: 'Page2',
    component: Page2,
    private: false
  },
  {
    path: '/page3',
    exact: true,
    name: 'Page3',
    component: Page3,
    private: false
  },
  {
    path: '/page4',
    exact: true,
    name: 'Page4',
    component: Page4,
    private: false
  },
  {
    path: '/cake',
    exact: true,
    name: 'cake',
    component: Cake,
    private: false
  },

 ];
export default routes;
