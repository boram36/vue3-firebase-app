import { defineRouter } from '#q-app/wrappers';
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';
import { setupLayouts } from 'virtual:generated-layouts';
import { LoadingBar } from 'quasar';

// import routes from './routes';

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: setupLayouts(routes),

    history: createHistory(process.env.VUE_ROUTER_BASE),
  });
  Router.beforeEach(() => {
    LoadingBar.start();
  });

  Router.afterEach(() => {
    LoadingBar.stop();
  });
  return Router;
});
