const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Home.vue')
      },
      {
        path: 'trading',
        name: 'trading',
        component: () => import('pages/Trading.vue')
      },
      {
        path: 'data-analyst',
        name: 'dataAnalyst',
        component: () => import('pages/DataAnalyst')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
