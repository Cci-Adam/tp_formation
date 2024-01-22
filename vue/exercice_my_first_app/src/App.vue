<script setup>
/*  
CE COMPOSANT RACINE APP RESTE EN MODE COMPOSITION API
IMPORTER LES COMPOSANTS ICI 
*/
import CompoOpt from './component/componentOpt.vue'
console.log(CompoOpt.data)
</script>

<template>
  <h1>Oui</h1>
  <header>
    <div class="Lol">
      <CompoOpt msg="MARCHE" />
    </div>
      
      
  </header>
</template>

<style scoped>
.lol {
  position: absolute;
}

</style>
