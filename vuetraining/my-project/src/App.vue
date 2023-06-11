<template>
    <div>
        <Navbar :pages="pages" />

        <router-view>

        </router-view>
    </div>
</template>

<script>
// import PageViewer from './components/PageViewer.vue';
import Navbar from './components/Navbar.vue';
// import CreatePage from './components/CreatePage.vue';
export default {
    components: {
        Navbar,
        // PageViewer,
        // CreatePage
    },
    methods: {
        pageCreated(pageObj) {
            this.pages.push(pageObj);
        }
    }
}
</script>

