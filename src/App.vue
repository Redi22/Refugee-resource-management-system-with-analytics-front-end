<template>
  <v-app style="background-color: #f0f3f7">
      <AppBar />
      <NavBar />
    <v-container style="margin-left: 245px; margin-top: 120px" >
    <router-view >  </router-view>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import AppBar from "./components/AppBar";
export default {
  name: "App",
  components: {
    NavBar,
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
