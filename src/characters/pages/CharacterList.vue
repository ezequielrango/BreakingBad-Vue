<script setup lang="ts">
import CardList from "../components/CardList.vue";

const props = defineProps<{title: string, visible: boolean}>()
console.log(props);

</script>
<template>
        <h1>{{ props.title }}</h1>

        <CardList/>
</template>
<style scoped>
</style>