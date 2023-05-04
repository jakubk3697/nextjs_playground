<template>
    <nav id="nav" :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My vue</a>
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li v-for="(page, index) in pages" :key="index" class="nav-item">
                    <navbar-link :page="page" :isAtive="activePage === page" @click.prevent="navLinkClick(index)">

                    </navbar-link>
                </li>
            </ul>
            <form class="d-flex">
                <button class="btn btn-primary" @click.prevent="changeTheme">
                    Change theme
                </button>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';
export default {
    components: {
        NavbarLink,
    },
    name: "AppNavbar",
    props: ['pages', 'activePage', 'navLinkClick'],
    data() {
        return {
            theme: 'light',
        }
    },
    methods: {
        changeTheme() {
            let theme = 'light';

            if (this.theme === 'light') {
                theme = 'dark';
            }

            this.theme = theme;
        }
    }
}
</script>