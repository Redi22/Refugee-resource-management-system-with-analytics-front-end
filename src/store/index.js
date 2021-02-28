import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editorDialog: true,
  },
  mutations: {
    changeDialog: (state, data) => {
      state.editorDialog = data;
    },
  },
  actions: {},
  modules: {},
  getters: {
    editorDialog: (state) => state.editorDialog,
  },
  plugins: [
    VuexPersist({
      storage: window.sessionStorage,
    }),
  ],
});
