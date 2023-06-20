<template>
  <div class="card mx-auto mt-7 max-w-sm text-center">
    <p class="text mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7 text-2xl">{{ error.message }}</p>
    <button class="btn mt-7 text-2xl" @click="$router.back()">Go Back</button>
  </div>
</template>

<script setup>
defineProps(["error"]);
</script>

<style scoped></style>
