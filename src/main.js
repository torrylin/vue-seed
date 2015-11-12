var Vue = require('vue');
var VueRouter = require('vue-router');
var configRouter = require('./route.config.js');
Vue.use(VueRouter);

var router = new VueRouter({});
configRouter(router)

var App = Vue.extend(require('./app.vue'));
router.start(App, 'body div');

window.router = router;

