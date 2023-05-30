<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
// import AppMain from './components/AppMain.vue';
import AppHome from "./pages/AppHome.vue";

export default {
    name: "App",
    data() {
        return {};
    },
    components: { 
      AppHeader,
      // AppMain,
      AppFooter,
      AppHome,
    }
}


</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <!-- <AppMain></AppMain> -->
  <AppFooter></AppFooter>
</template>

<style scoped>

</style>
