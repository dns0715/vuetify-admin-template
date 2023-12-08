import {createRouter, createWebHashHistory} from 'vue-router'
import DashBoard from '@/views/DashBoard'
import GridSystem from '@/views/GridSystem'

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
]

export default createRouter({
    history: createWebHashHistory(),
    routes: routes,
});