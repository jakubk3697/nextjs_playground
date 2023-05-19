<template>
    <nav id="nav" :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My vue</a>
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li v-for="(page, index) in publishedPages" :key="index" class="nav-item">
                    <navbar-link :page="page" :index="index" active-class="active">
                    </navbar-link>
                </li>
                <li>
                    <router-link :to="`/pages`" class="nav-link" aria-current="page">
                        Pages
                    </router-link>
                </li>
            </ul>
            <form class="d-flex">
                <button class="btn btn-primary" @click.prevent="changeTheme">
                    Change the me
                </button>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';
export default {
    name: "AppNavbar",
    components: {
        NavbarLink,
    },
    inject: ['$pages'],
    data() {
        return {
            theme: 'light',
        }
    },
    created() {
        this.getThemeSetting();
        this.pages = this.$pages.getAllPages();
    },
    computed: {
        publishedPages() {
            return this.pages.filter(page => page.published);
        }
    },
    methods: {
        changeTheme() {
            let theme = 'light';

            if (this.theme === 'light') {
                theme = 'dark';
            }

            this.theme = theme;
            this.storeThemeSetting();
        },
        storeThemeSetting() {
            localStorage.setItem('theme', this.theme);
        },
        getThemeSetting() {
            let theme = localStorage.getItem('theme');

            if (theme) {
                this.theme = theme;
            }
        }
    },
}
</script>