<script>
import axios from 'axios';

export default {
    name: "ProgettoSolo",

    data() {
        return {
            project: [],

            inCaricamento: true,
            progettoEsiste: false,

            projectSlug: '',

            baseUrl: "http://127.0.0.1:8000/",
        }
    },

    mounted() {
        // console.log(this.$route);
        this.projectSlug = this.$route.params.slug;
        // console.log(this.projectSlug);
        this.cercaProgetto();
    },

    computed: {
        imgProgetto() {
            return this.baseUrl + "storage/" + this.project.cover_image;
        }
    },

    methods: {
        cercaProgetto() {
            // console.log("http://127.0.0.1:8000/api/projects/" + this.projectSlug);
            axios.get(this.baseUrl + "api/projects/" + this.projectSlug).then(response => {

                console.log('progetto:', response);

                if(response.data.success) {

                    this.project = response.data.project;
                    this.inCaricamento = false;
                    this.progettoEsiste = true;

                } else {

                    this.inCaricamento = false;
                    this.progettoEsiste = false;

                }


            });
        }
    }
}
</script>

<template>
<div v-if="inCaricamento" id="spinner-container">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Attendere prego...</span>
    </div>
</div>
<div v-else class="container">
    <div v-if="progettoEsiste">

        <div class="immagine">
            <img :src="imgProgetto" alt="copertina">
        </div>

        <h1>{{ project.title }}</h1>
        <hr>
        <p>
          {{ project.content }}
        </p>

    </div>
    <div v-else>
        <div class="alert alert-danger" role="alert">
            Non vi sta progetto alcuno
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
#spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
  
    position: fixed;
    top: 0;
    left: 0;
    
    width: 100%;
    height: 600px;
  
  }
  .immagine img{
    max-height: 300px;
    object-fit: cover;
  }
</style>