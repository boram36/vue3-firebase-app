import { storeToRefs } from 'pinia';
import { defineBoot } from '#q-app/wrappers';
import { useAuthStore } from 'src/stores/auth';

function requiresAuth(to) {
  const { isAuthenticated } = storeToRefs(useAuthStore());

  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    !isAuthenticated.value
  ) {
    alert('로그인이 필요한 페이지입니다.');
    return '/';
  }
  return true;
}

export default defineBoot(async ({ app, router }) => {
  router.beforeEach(requiresAuth);
});

// const routes = [
//   { path: '/', component: Home },
//   { path: '/about', component: About },
//   { path: '/contact', component: Contact },
// ];

// /about

// this.$route.matched = [
//   { path: '/', component: Home },
//   { path: '/about', component: About },
// ]
