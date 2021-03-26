<template>
    <div>
        <form @submit.prevent="resetPassword">
            <input type="email" v-model="user.email" placeholder="email" />
            <button type="submit">Reset Password</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            user: {
                email: ""
            }
        };
    },
    methods: {
        ...mapActions(["reset_password"]),
        resetPassword() {
            this.reset_password(this.user);
        }
    }
};
</script>

<style scoped></style>
