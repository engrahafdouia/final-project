// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/User'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
      },

      {
        path: 'contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '@/views/ContactView.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import(/* webpackChunkName: "products" */ '@/views/ProductsView.vue'),
        meta: {
          guard: 'auth'
        },
      },
      {
        path: 'singleproduct/:id',
       name: 'singleproduct',
       component: () => import(/* webpackChunkName: "singleproduct" */ '@/views/SingleProductView.vue'),
        meta: {
          guard: 'auth'
        },

     },
      {
        path: 'cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "Cart" */ '@/views/CartView.vue'),
        meta: {
          guard: 'auth'
        },
      },
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "Login" */ '@/views/LoginView.vue'),
        meta:{
          guard:'vistor'
        }
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "Profile" */ '@/views/ProfileView.vue'),
        meta: {
          guard: 'auth'
        },
      },
      {
      path: ':pathMatch(.*)*',
      name: 'Not Found',
      component: () => import("@/views/NotFoundView.vue")
      }


    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/app-free/AppbarFree.vue'),
    children:[
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/DashboardView.vue'),

      },
      {
        path: 'productInfo',
        name: 'productInfo',
        component: () => import(/* webpackChunkName: "ProductInfo" */ '@/views/ProductInfoView.vue'),

      },
      {
        path: 'userInfo',
        name: 'userInfo',
        component: () => import(/* webpackChunkName: "UserInfo" */ '@/views/UserInfoView.vue'),

      },

    ]
  },

]

const router = createRouter({
 history: createWebHistory(process.env.NODE_ENV === "production" ? "/final-project/" : "/"),
 routes,


})


router.beforeEach(function (to, from, next) {
  const store = useUserStore()

  if (to.meta.guard === 'auth' && !store.isLoggedIn) {
    next('/login')
  }
  // else if (to.meta.guard === 'vistor' && store.isLoggedIn) {
  //   next('/profile')
  // }
  else
    next()
})
router.afterEach(() => {
  window.scrollTo(0, 0);
});
// scrollBehavior(to, from, savedPosition) {
//   if (savedPosition) {
//       return savedPosition;

//   }

//    else if (to.hash) {
//       return { selector: to.hash,
//         behavior:'smooth'};
//   }
// return { top:500}
// },


export default router
