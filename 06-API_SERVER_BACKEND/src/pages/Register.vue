<template>
    <div class="ass1-login">
        <div class="ass1-login__logo">
            <router-link to="/" class="ass1-logo">Troll Me</router-link>
        </div>
        <div class="ass1-login__content">
            <p>Register an account</p>
            <div class="ass1-login__form">
                <form action="#" @submit.prevent="handleSubmitRegister">
                    <input
                        v-model="fullname"
                        type="text"
                        class="form-control"
                        placeholder="Your name"
                        required
                    />
                    <input
                        v-model="email"
                        type="text"
                        class="form-control"
                        placeholder="Email"
                        required
                    />
                    <input
                        v-model="password"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        required
                    />
                    <input
                        v-model="repassword"
                        type="password"
                        class="form-control"
                        placeholder="Confirm password"
                        required
                    />
                    <div class="ass1-login__send">
                        <router-link to="/login">Login</router-link>
                        <button type="submit" class="ass1-btn">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { REGISTER_FAILED, REGISTER_SUCCESS } from "../constants";
export default {
    name: "register",
    data() {
        return {
            email: "",
            fullname: "",
            password: "",
            repassword: ""
        };
    },
    methods: {
        ...mapActions(["register"]),
        handleSubmitRegister(e) {
            let data = {
                email: this.email,
                fullname: this.fullname,
                password: this.password,
                repassword: this.repassword
            };
            if (
                data.email &&
                data.fullname &&
                data.password &&
                data.repassword
            ) {
                this.register(data).then(res => {
                    if (!res.ok) {
                        this.$notify(REGISTER_FAILED);
                    } else {
                        this.$router.push("/");
                        this.$notify(REGISTER_SUCCESS);
                    }
                });
            } else {
                this.$notify(REGISTER_FAILED);
            }
        }
    }
};
</script>

<style>
</style>