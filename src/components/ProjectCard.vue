<script>
export default {
  name: 'ProjectCard',

  data() {
    return {
      baseUrl: 'http://127.0.0.1:8000',
    }
  },

  props: {
    project: Object,
  },

  computed: {
    stringiContent() {
      if(this.project.content.length > 50) {
        return this.project.content.substring(0, 50) + '...';
      } else {
        return this.project.content;
      }
    },

    coverImage() {
      if(this.project.cover_image == null) {
        return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
      } else {
        return this.baseUrl + '/' + 'storage/' + this.project.cover_image;
      }
    },
  },
}
</script>

<template>

    <div class="card project">

        <img :src="coverImage" class="cover-image card-img-top" alt="...">
    
        <div class="card-body">
    
          <h5 class="card-title">{{ project.title }}</h5>
          <small>Tipologia: {{ project.type ? project.type.name : 'nessuna' }}</small>

          <div class="tecnologie">
            <span v-for="technology in project.technologies" class="badge rounded-pill" :style="{backgroundColor: technology.color}">{{ technology.name }}</span>
          </div>
    
          <p class="card-text"> {{ stringiContent }} </p>

          <div class="text-center">
            <router-link :to="{name: 'projects.show', params: {slug: project.slug}}" class="btn btn-outline-primary">Vedi</router-link>
          </div>
          <!-- <a href="#" class="btn btn-primary">Vadi altrove</a> -->
    
        </div>
    
    </div> 
</template>

<style lang="scss">

.project.card {
    .cover-image {
        height: 200px;
        
        object-fit: cover;
        object-position: center;
    }
    .tecnologie {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .5em;
  
        padding: .8em 0;
  
        overflow-x: scroll;
        .badge{
            color: black;
        }
    }
      
}

</style>