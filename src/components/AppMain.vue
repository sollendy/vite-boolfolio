<script>



import ProjectCard from './ProjectCard.vue';

export default {
  name: 'AppMain',

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

    

</template>

<style scoped>

</style>