<template>
    <div>
        <form @submit.prevent="loginUser">
            <input type="email" v-model="email" placeholder="email" />
            <input type="password" v-model="password" placeholder="password" />
            <button type="submit">Login</button>
        </form>
        <button @submit.prevent="logoutUser">Logout</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        ...mapActions(["login", "logout"]),
        loginUser() {
            let user = {
                email: this.email.toLowerCase(),
                password: this.password
            };
            this.login(user).then(res => {
                console.log(res);
            });
        },
        logoutUser() {
            this.logout();
        }
    }
};
</script>

<style scoped></style>
