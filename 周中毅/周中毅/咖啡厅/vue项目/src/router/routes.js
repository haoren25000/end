export const routes = [
    {
        path: '/main',
        name: 'Main',
        component: r => require(['../views/Main.vue'], r),
        children: [
          {
            path: 'home',
            name: 'Home',
            component: r => require(['../views/main/Home.vue'], r)
          },
          {
            path: 'classification',
            name: 'Classification',
            component: r => require(['../views/main/Classification.vue'], r)
          },
          {
            path: 'shopcart',
            name: 'Shopcart',
            component: r => require(['../views/main/Shopcart.vue'], r)
          },
          {
            path: 'my',
            name: 'My',
            component: r => require(['../views/main/My.vue'], r)
          }
        ]
    },
    {
        path: '*',
        redirect: {
            name: 'Home'
        }
    }
]