<template>
  <v-navigation-drawer permanent height="1000" app>
    <v-list>
      <div style="height: 100px"></div>
    </v-list>
    <v-list>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title primary--text">
            Sandra Adams
          </v-list-item-title>
          <v-list-item-subtitle class="primary--text"
            >sandra_a88@gmail.com</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list nav dense>
      <v-list-item link class="mx-4">
        <v-list-item-icon style="margin-right: 5px">
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>My Files</v-list-item-title>
      </v-list-item>
      <v-list-item link class="mx-4 primary">
        <v-list-item-icon style="margin-right: 5px">
          <v-icon class="white--text">mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="white--text"
          >Shared with me</v-list-item-title
        >
      </v-list-item>
      <v-list-item link class="mx-4">
        <v-list-item-icon style="margin-right: 5px">
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Starred</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  //
};
</script>