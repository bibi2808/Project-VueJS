<template>
    <div id="page-register">
        <div class="container">
            <div class="card card-container">
                <img
                    id="profile-img"
                    alt
                    class="profile-img-card"
                    src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                />
                <p id="profile-name" class="profile-name-card"></p>

                <form @submit.prevent="handleLogin" id="form-signup" class="form-signin">
                    <div class="form-group">
                        <input
                            v-model="email"
                            type="email"
                            class="form-control"
                            placeholder="Địa chỉ email"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            v-model="password"
                            type="password"
                            class="form-control"
                            placeholder="Mật khẩu"
                        />
                    </div>
                    <button
                        class="btn btn-lg btn-primary btn-block btn-signin"
                        type="submit"
                    >Đăng nhập</button>
                </form>

                <router-link to="/register" class="register">Đăng ký một tài khoản</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { auth } from "../config/firebase";
export default {
    name: "login",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    computed: {
        ...mapGetters(["getCurrentUserId"])
    },
    methods: {
        ...mapActions(["login"]),
        handleLogin() {
            if (this.email && this.password) {
                let data = {
                    email: this.email,
                    password: this.password
                };
                this.login(data).then(res => {
                    if (res.ok) {
                        this.$router.push("/");
                    } else {
                        alert(res.error);
                    }
                });
            }
        }
    }
};
</script>

<style>
</style>