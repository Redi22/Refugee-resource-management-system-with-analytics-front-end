<template>
  <v-card class="p-5 elevation-0 vCardLength">
    <v-text-field
      outlined
      label="Name"
      dense
      prepend-inner-icon="edit"
      class="mx-8 ma-5 lengthAlign"
      v-model="name"
    ></v-text-field>
    <v-textarea
      dense
      label="Description"
      v-model="description"
      class="mx-8"
      prepend-inner-icon="note"
      outlined
    ></v-textarea>
    <v-menu>
      <template v-slot:activator="{ on }">
        <v-text-field
          outlined
          dense
          :value="startingDate"
          v-on="on"
          class="mx-8"
          v-model="startingDate"
          label="Starting Date"
          prepend-inner-icon="date_range"
        ></v-text-field>
      </template>
      <v-date-picker></v-date-picker>
    </v-menu>
    <v-menu>
      <template v-slot:activator="{ on }">
        <v-text-field
          outlined
          dense
          :value="finishingDate"
          v-on="on"
          class="mx-8"
          label="Finishing Date"
          prepend-inner-icon="date_range"
        ></v-text-field>
      </template>
      <v-date-picker v-model="finishingDate"></v-date-picker>
    </v-menu>
    <v-row justify="end">
      <v-btn class="mx-12" outlined color="primary lighten-2" left>Register</v-btn>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      startingDate: null,
      finishingDate: null
    };
  },
 
 
};
</script>