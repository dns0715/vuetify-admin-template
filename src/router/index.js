import {createRouter, createWebHashHistory} from 'vue-router'
import DashBoard from '@/views/DashBoard'
import GridSystem from '@/views/GridSystem'
import GridListPage from '@/views/GridListPage'
import BreakPoint from '@/views/BreakPoint'


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
    {
        path: '/break-point-page',
        name: 'BreakpointPage',
        component: BreakPoint,
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes: routes,
});