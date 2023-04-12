<script setup lang="ts">
import { toRef } from "vue";
import type { Character, Result } from "../interfaces/Character";


const props = defineProps<{character: Result}>();
const character = toRef(props, 'character');
</script>
<template>


    <div class="card" style="width: 18rem;">
  <img :src="character.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{character.name}}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Estado: {{character.status}}</li>
    <li class="list-group-item">Especie: {{character.species}}</li>
    <li class="list-group-item">Ubicación: {{character.location.name}}</li>
  </ul>
</div>
</template>

<style scoped>
/* .character-card{
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
} */

.card{
    margin: 5% ;
}
img{
    width: 100%;
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
}
</style>