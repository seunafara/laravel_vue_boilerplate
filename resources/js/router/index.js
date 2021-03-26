import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/about",

        component: () => import("../views/About.vue")
    },
    {
        path: "/login",

        component: () => import("../views/auth/Login.vue")
    },
    {
        path: "/reset-password",

        component: () => import("../views/auth/ResetPassword.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
