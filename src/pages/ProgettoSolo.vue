<script>
import axios from 'axios';

export default {
    name: "ProgettoSolo",

    data() {
        return {
            project: [],

            projectSlug: '',
        }
    },

    mounted() {
        // console.log(this.$route);
        this.projectSlug = this.$route.params.slug;
        // console.log(this.projectSlug);
        this.cercaProgetto();
    },

    methods: {
        cercaProgetto() {
            // console.log("http://127.0.0.1:8000/api/projects/" + this.projectSlug);
            axios.get("http://127.0.0.1:8000/api/projects/" + this.projectSlug).then(response => {

                console.log('progetto:', response);
                this.project = response.data.project;

            });
        }
    }
}
</script>

<template>
<div class="container">
    <h1>{{ project.title }}</h1>
</div>
</template>

<style scoped lang="scss">

</style>