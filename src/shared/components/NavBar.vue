<script setup lang="ts">
</script>

<template>
    <nav>
        <img src="@/assets/logo.svg" alt="logo" height="25" width="25">
        <span>algo</span>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>

   </nav>
</template>

<style scoped>
nav{
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
}
span{
    margin-right: 10px;
}
a{
    margin-right: 5px;
}
</style>