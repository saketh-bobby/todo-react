import ListTabsContainer from './ListTabsContainer'

const routeConfig = [
  {
    path: "/",
    component: ListTabsContainer
  },
  {
    path: "/pending",
    component: ListTabsContainer
  },
  {
    path: "/completed",
    component: ListTabsContainer
  },
  {
    path: "/priority",
    component: ListTabsContainer
  },
  {
    path: "/labels",
    component: ListTabsContainer
  }
];

export { routeConfig };
