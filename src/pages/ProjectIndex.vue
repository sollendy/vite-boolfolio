<script>

import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';



export default {
    name: "projectIndex",

    data() {
        return {
            projects: [],

            currentPage: 1,
        }
    },

    components: {
    ProjectCard,
  },  

  created() {
    this.getProjects();
  },

  methods: {
    getProjects() {

      axios.get('http://127.0.0.1:8000/api/projects?page=' + this.currentPage).then(response => {
        console.log(response.data.results);
        this.projects = response.data.results.data;
        console.log(this.projects);
      });

    },

  },

}
</script>

<template>
    <div class="container py-5">
        <div v-if="projects.length > 0"  class="container pt-5">
            <h1>Tutti i progetti del mio sito</h1>
        
            <hr>
        
            <div class="row">
              <div v-for="project in projects" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 ">
        
                <ProjectCard :project="project"></ProjectCard>
        
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>