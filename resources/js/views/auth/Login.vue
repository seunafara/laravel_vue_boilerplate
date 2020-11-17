<template>
    <div>
        <form @submit.prevent="loginUser">
            <input type="text" v-model="email" placeholder="email" />
            <input type="password" v-model="password" placeholder="password" />
            <button type="submit">Login</button>
        </form>
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
        ...mapActions(["login"]),
        loginUser() {
            let user = {
                email: this.email.toLowerCase(),
                password: this.password
            };
            this.login(user).then(res => {
                console.log(res);
            });
        }
    }
};
</script>

<style scoped></style>
