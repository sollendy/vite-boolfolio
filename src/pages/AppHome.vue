<script>
export default {
    name: "AppHome",
}
</script>

<template>
<div class="container">
    <h1>benvenuto nella pagina centrale</h1>
    <hr>
    <router-link :to="{name: 'about'}">scopri di più</router-link> <br>
    <router-link :to="{name: 'projects.index'}">i miei Progetti</router-link> 
</div>
</template>

<style scoped lang="scss">

</style>