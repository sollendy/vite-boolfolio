import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import ProjectIndex from "./pages/ProjectIndex.vue";
import ProgettoSolo from './pages/ProgettoSolo.vue'

const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome,
        },

        {
            path: '/about',
            name: 'about',
            component: AppAbout,
        },

        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectIndex,
        },

        {
            path: '/projects/slug',
            name: 'projects.show',
            component: ProgettoSolo,
        },
      
    ]
});

export { router };