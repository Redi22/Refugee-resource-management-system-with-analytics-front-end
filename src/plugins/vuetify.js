import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {  
        themes: {
            light: {
              primary: '#006666',
              secondary: '#008080',
              accent: '#66b2b2',
              error: '#A86561',
            },
          },
        },

});
