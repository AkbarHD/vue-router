import {
    createRouter,
    createWebHashHistory
} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "home",
            component: () => import("../views/Home.vue")
        },
        {
            path: "/products/:id",
            name: "products",
            component: () => import("../views/Product.vue"),
            children: [{
                path: 'owner',
                name: 'owner',
                component: () => import("../views/Owner.vue")
            }]
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/About.vue")
        }
    ]
});

export default router;