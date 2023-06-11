<template>
    <div class="container">
        <div class="text-end">
            <router-link to="/pages/create" class="btn btn-primary btn-sm">
                Create new page
            </router-link>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Link Text </th>
                    <th>Is published</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(page, index) in $pages.getAllPages()" :key="index" @click="goToPage(index)">
                    <td>{{ page.pageTitle }}</td>
                    <td>{{ page.link.text }}</td>
                    <td>{{ page.published ? 'yes' : 'no' }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const $pages = inject('$pages');
const router = useRouter();

function goToPage(index) {
    router.push({ path: `/pages/${index}/edit` });
}
</script>

<style scoped>
.table.table-hover tr:hover {
    cursor: pointer;
}
</style>