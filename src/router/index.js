import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  
  {
    path: '/faction',
    alwaysShow:true,
    component: Layout,
    redirect:'/faction',
    name: 'Example',
    meta: { title: '阵营', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'index',
        name:'faction',
        component:()=>import('@/views/faction/index'),
        meta: { title: '阵营列表', icon: 'table' }
      },
      {
        path: 'createfaction/index',
        name: 'createfaction',
        component: () => import('@/views/faction/createfaction/index'),
        meta: { title: '新增阵营', icon: 'form' }
      },
      {
        hidden:true,
        path: 'editfaction/index',
        name: 'editfaction',
        component: () => import('@/views/faction/editfaction/index'),
        meta: { title: '编辑阵营信息', icon: 'form' }
      }
    ]
  },
  {
    path: '/employee',
    alwaysShow:true,
    component: Layout,
    redirect: '/employee',
    name: 'Example',
    meta: { title: '成员', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'index',
        name: 'employee',
        component: () => import('@/views/employee/index'),
        meta: { title: '成员列表', icon: 'table' }
      },  
      {
        path: 'createemp/index',
        name: 'createemp',
        component: () => import('@/views/employee/createemp/index'),
        meta: { title: '新增成员', icon: 'form' }
      },
      {
        hidden:true,
        path: 'editemp/index',
        name: 'editemp',
        component: () => import('@/views/employee/editemp/index'),
        meta: { title: '编辑成员信息', icon: 'form' }
      },
      {
        // hidden:true,
        path: 'empdetail/index',
        name: 'empdetail',
        component: () => import('@/views/employee/empdetail/index'),
        meta: { title: '详细信息' }
      }
    ]
  },
  
  {
    path: '/weapon',
    alwaysShow:true,
    component: Layout,
    redirect:'/weapon',
    name: 'Example',
    meta: { title: '武器', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'index',
        name:'weapon',
        component:()=>import('@/views/weapon/index'),
        meta: { title: '武器列表', icon: 'table' }
      },
      {
        path: 'createweapon/index',
        name: 'createweapon',
        component: () => import('@/views/weapon/createweapon/index'),
        meta: { title: '新增武器', icon: 'form' }
      },
      {
        hidden:true,
        path: 'editweapon/index',
        name: 'editweapon',
        component: () => import('@/views/weapon/editweapon/index'),
        meta: { title: '编辑武器信息', icon: 'form' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },
 
  {
    path: '/playvue',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'playvue',
        component: () => import('@/views/playvue/index'),
        meta: { title: 'Vue4.0', icon: 'form' }
      }
    ]
  },

  

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
