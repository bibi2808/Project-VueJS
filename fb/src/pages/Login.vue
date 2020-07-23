<template>
    <div class="ass1-login">
        <div class="ass1-login__logo">
            <router-link to="/" class="ass1-logo">FB</router-link>
        </div>
        <div class="ass1-login__content">
            <p>Login</p>
            <div class="ass1-login__form">
                <form action="#" @submit.prevent="handleLogin">
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
                            placeholder="Mật khẩu"
                            required
                        />
                        <!-- <a href="#">Copy</a> -->
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
import { EMAIL_OR_PASSWORD_IS_WRONG } from "../constants";
import { mapActions } from 'vuex';
export default {
    name: "login",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        ...mapActions(['login']),
        handleLogin() {
            let data = {
                email : this.email,
                password : this.password
            };
            this.login(data).then(res => {
                if(!res.ok){
                    if(typeof res.error === 'string'){
                        alert(res.error);
                    } else {
                        alert(res.error.join(' '));
                    }   
                } else {
                    this.$router.push('/');
                }
            });
        }
    }
};
</script>

<style>
</style>