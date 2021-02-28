<template>
  <v-row justify="center">
    <v-dialog v-model="editorDialog" persistent width="40%">
      <v-card>
        <v-card-title class="primary white--text">
          <v-row>
            <div>
              <span>{{title}}</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn class="white--text" text icon @click="DialogOff()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-row>
        </v-card-title>
        <v-card-text>
          <slot name="editorBody"></slot>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["editorDialog"])
  },
  methods: {
    ...mapMutations(["changeDialog"]),

    DialogOff() {
      this.changeDialog(false);
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
