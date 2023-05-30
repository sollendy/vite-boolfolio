<script>
export default {
    name: "AppHome",
}
</script>

<template>
<div class="container">
    <h1>benvenuto nella pagina centrale</h1>
    <hr>
    <router-link :to="{name: 'about'}">scopri di più</router-link>
</div>
</template>

<style scoped lang="scss">

</style>