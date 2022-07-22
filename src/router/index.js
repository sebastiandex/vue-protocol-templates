import {createWebHistory, createRouter} from "vue-router";
import Home from "@/components/Home";
import TemplateEditor from "@/components/TemplateEditor";
import Protocols from "@/components/Protocols";

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/templates',
        name: "Templates",
        component: TemplateEditor
    },
    {
        path: '/protocols',
        name: "Protocols",
        component: Protocols
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;