require("./bootstrap");

import Vue from "vue";
import router from "./router";
import store from "./store";
import axios from "axios";

//Main pages
import App from "./views/app.vue";

// Setting up default vue's http module for api calls
Vue.prototype.$http = axios;
const token = localStorage.getItem("token");

// if token exists, we will default axios authorization headers
if (token) {
    Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

const app = new Vue({
    router,
    store,
    el: "#app",
    components: { App }
});
