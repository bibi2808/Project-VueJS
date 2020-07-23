<template>
    <div class="ass1-login">
        <div class="ass1-login__logo">
            <router-link to="/" class="ass1-logo">FB</router-link>
        </div>
        <div class="ass1-login__content">
            <p>Register</p>
            <div class="ass1-login__form">
                <form action="#" @submit.prevent="handleRegister">
                    <input
                        v-model="fullname"
                        type="text"
                        class="form-control"
                        placeholder="Tên hiển thị"
                        required
                    />
                    <input
                        v-model="email"
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        required
                    />
                    <input
                        v-model="password"
                        type="password"
                        class="form-control"
                        placeholder="Mật khẩu"
                        required
                    />
                    <input
                        v-model="repassword"
                        type="password"
                        class="form-control"
                        placeholder="Nhập lại mật khẩu"
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
export default {
    name: "register",
    data() {
        return {
            fullname: "",
            email: "",
            password: "",
            repassword: ""
        };
    },
    methods: {
        ...mapActions(["register"]),
        handleRegister() {
            let data = {
                fullname: this.fullname,
                email: this.email,
                password: this.password,
                repassword: this.repassword
            };
            if(data.email && data.fullname && data.password && data.repassword) {
                this.register(data).then(res => {
                    console.log("res = ", res);
                    if(!res.ok) {
                        alert(res.error); // Notification
                    } else {
                        this.$router.push('/');
                        alert('Đăng ký thành công');
                    }
                })
            } 
        }
    }
};
</script>

<style>
</style>