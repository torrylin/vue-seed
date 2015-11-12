module.exports = function (router) {
    router.map({
        '/home': {
            component: require('./component/home.vue'),
            subRoutes: {
                '/': {
                    component: require('./component/home/home1.vue')
                },
                '/1': {
                    component: require('./component/home/home1.vue')
                },
                '/2': {
                    component: require('./component/home/home2.vue')
                },
                '/3': {
                    component: require('./component/home/home3.vue')
                }
            }
        },
        '/list': {
            component: require('./component/list.vue'),
            subRoutes: {
                '/user/:userId': {
                    component: require('./component/list/details.vue')
                }
            }
        },
        '/about': {
            component: require('./component/about.vue')
        },
        '*': {
            component: {
                template: '<h1>Not Found</h1>'
            }
        }
    });
}