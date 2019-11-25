import Vue from 'vue'
import Router from 'vue-router'   // vue-router 는 Vue.js에서 공식적으로 제공하는 플러그인
import Container from '@/layouts/DefaultContainer.vue';
import About from '@/views/About.vue';
import Services from '@/views/Services.vue';
import Blog from '@/views/Blog.vue';
import Pages from '@/views/Pages.vue';
import Contact from '@/views/Contact.vue';


Vue.use(Router)   // 전역 변수 선언??


export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'home',
            component: Container,
            redirect: '/main',
            children : [
                { path: '/main', component: () => import( '@/views/Main.vue') },
                { path: '/about', component: About },
                { path: '/services', component: Services },
                { path: '/blog', component: Blog },
                { path: '/pages', component: Pages },
                { path: '/contact', component: Contact },
            ]
        },
    ]
})


