<script>

import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';



export default {
    name: "projectIndex",

    data() {
        return {
            projects: [],

            currentPage: 1,

            types: [],

            selectedtypeId: "",
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

      axios.get('http://127.0.0.1:8000/api/projects?page=' + this.currentPage + "&type_id=" + this.selectedtypeId).then(response => {
        console.log(response.data.results);
        console.log('http://127.0.0.1:8000/api/projects?page=' + this.currentPage + "&type_id=" + this.selectedtypeId);
        this.projects = response.data.results.data;
        this.types = response.data.allTypes;
        console.log(this.types);
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

            <form @submit.prevent="getProjects()" action="" class="d-flex">

              <select name="type_id" id="type_id" class="form-select mb-2" v-model="selectedtypeId" @change="getProjects()">
        
                <option value="">Tutte</option>
        
                <option v-for="type in types" :value="type.id">{{ type.name }}</option>
        
              </select>
        
              <!-- <button class="btn btn-primary">Filtra</button> -->
            </form>
        
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