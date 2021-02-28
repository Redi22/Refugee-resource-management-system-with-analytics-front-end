import Vue from "vue";
import VueRouter from "vue-router";
import AdminDashboard from "../views/AdminDashboard";
import AdminRefugeePage from "../views/AdminRefugeePage";
import Login from "../views/Login";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: AdminDashboard,  
      //   beforeEnter: (to , from , next) =>{
      //     if(!store.state.accessToken && !store.state.loggedIn ){
      //       next('/login');
      //     }else{
      //       next();
      //     }
      //   }
    },
    {
      path: "/refugees",
      name: "refuge",
      component: AdminRefugeePage,  
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});

export default router;
