import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router";
import store from "./store";
import VueApexCharts from "vue-apexcharts";
import EditorDialog from "../src/components/Base/EditorDialog";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
Vue.config.productionTip = false
Vue.component("editor", EditorDialog);

Vue.use(VueApexCharts);
new Vue({
  
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
