<template>
    <div class="container">
        <h1>{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p>
    </div>
</template>

<script>
export default {
    props: ['index'],
    inject: ['$pages'],
    created() {
        this.page = this.$pages.getSinglePage(this.$route.params.index);
    },
    data() {
        return {
            page: null,
        }
    },
    watch: {
        index(newIndex) {
            this.page = this.$pages.getSinglePage(newIndex);
        }
    }
}
</script>