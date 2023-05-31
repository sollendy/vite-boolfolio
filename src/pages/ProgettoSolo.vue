<script>
export default {
    name: "ProgettoSolo",

    data() {
        return {
            projectSlug: ''
        }
    },

    mounted() {
        console.log(this.$route);
        this.projectSlug = this.route.params.slug;
    }
}
</script>

<template>
<div class="container">
    <h1>sono un progetto</h1>
    {{ $route.params.slug }}
</div>
</template>

<style scoped lang="scss">

</style>