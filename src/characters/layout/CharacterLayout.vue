<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/shared/components/NavBar.vue';
</script>
<template>
        <h1>Personajes</h1>


        <NavBar :show-icon="false"/>
        <RouterView/>
</template>
<style scoped>
</style>