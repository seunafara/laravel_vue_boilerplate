import axios from "axios";

import router from "../router";

const state = {
    token: localStorage.getItem("token") || "",
    user: {},
    status: "",
    error: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {
    // Login Action
    async login({ commit }, user) {
        commit("auth_request");
        try {
            let res = await axios.post(`/api/v1/login`, user);
            if (res.data.success) {
                const token = res.data.token;
                const user = res.data.user;
                // Store token into localstorage
                localStorage.setItem("token", token);
                //Set axios defauts
                axios.defaults.headers.common["Authorization"] = token;
                commit("auth_success", token, user);
            }

            //   localStorage.setItem('loginPhoto', res.data.user.photo);

            return res;
        } catch (err) {
            commit("auth_error", err);
        }
    }
};

const mutations = {
    auth_request(state) {
        state.error = null;
        state.status = "loading";
    },
    auth_success(state, token, user) {
        state.token = token;
        state.user = user;
        state.status = "success";
        state.error = null;
    },
    auth_error(state, error) {
        state.login_error = error.response.data.message;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
