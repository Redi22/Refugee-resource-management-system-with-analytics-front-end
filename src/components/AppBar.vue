<template>
  <v-app-bar class="mx-12 mt-6"  app>
    <!-- <v-toolbar-title>Title</v-toolbar-title> -->

    <v-list-item-avatar>
      <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
    </v-list-item-avatar>
    <v-list-item >
      <v-card-text class="py-2">John Leider</v-card-text>
    </v-list-item>

    <v-btn icon>
      <v-icon class="primary--text">mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon class="primary--text">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon class="primary--text">
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {};
</script>