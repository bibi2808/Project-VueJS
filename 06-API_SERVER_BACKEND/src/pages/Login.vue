<template>
    <div class="ass1-login">
        <div class="ass1-login__logo">
            <router-link to="/" class="ass1-logo">Troll Me</router-link>
        </div>
        <div class="ass1-login__content">
            <p>Login Page</p>
            <div class="ass1-login__form">
                <form action="#" @submit.prevent="handleSubmitLogin">
                    <input
                        v-model="email"
                        type="text"
                        class="form-control"
                        placeholder="Email"
                        required
                    />
                    <div class="ass1-input-copy">
                        <input
                            v-model="password"
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div class="ass1-login__send">
                        <router-link to="/register">Register</router-link>
                        <button type="submit" class="ass1-btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { EMAIL_OR_PASSWORD_IS_WRONG, PASSWORD_IS_SHORT } from "../constants";
export default {
    name: "login",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        ...mapActions(["login"]),
        handleSubmitLogin(e) {
            let data = {
                email: this.email,
                password: this.password
            };
            this.login(data).then(res => {
                if (res.ok) {
                    this.$router.push("/");
                } else {
                    if (typeof res.error === "string") {
                        this.$notify(EMAIL_OR_PASSWORD_IS_WRONG);
                    } else {
                        this.$notify(PASSWORD_IS_SHORT);
                    }
                }
            });
        }
    }
};
</script>

<style>
</style>