export const routes = [
  {
    path: '/main',
    name: 'Main',
    component: r => require(['../views/Main.vue'], r),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: r => require(['../views/mainViews/Home.vue'], r),
        children: [
          {
            path: 'recommend',
            name: 'Recommend',
            component: r => require(['../views/home/Recommend.vue'], r)
          }, {
            path: 'intelligence',
            name: 'Intelligence',
            component: r => require(['../views/home/Intelligence.vue'], r)
          },
        ]
      },
      {
        path: 'order',
        name: 'Order',
        component: r => require(['../views/mainViews/Order.vue'], r)
      },
      {
        path: 'shopcart',
        name: 'Shopcart',
        component: r => require(['../views/mainViews/Shopcart.vue'], r)
      },
      {
        path: 'my',
        name: 'My',
        component: r => require(['../views/mainViews/My.vue'], r)
      }
    ]
  },
  
  {
    path: '*',
    redirect: {
      name: 'Main'
    }
  }
]