import {createRouter, createWebHashHistory} from 'vue-router'
import DashBoard from '@/views/DashBoard'
import GridSystem from '@/views/GridSystem'
import GridListPage from '@/views/GridListPage'


const routes = [
    {
        path: '/',
        name: 'DashBoard',
        component: DashBoard,
    },
    {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem,
    },
    {
        path: '/grid-list-page',
        name: 'GridListPage',
        component: GridListPage,
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes: routes,
});