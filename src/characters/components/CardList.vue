<script setup lang="ts">
import breakingBadApi from '../../api/breakingBadApi';

breakingBadApi.get('/quotes')
    .then( resp => {
        console.log({data: resp.data[0].author});
        
    })
</script>

<template>
    <ul>
        <li>HOLA</li>
        <li>HOLA</li>
        <li>HOLA</li>
    </ul>
</template>

<style scoped>
</style>