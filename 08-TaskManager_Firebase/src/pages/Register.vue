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

                <form @submit.prevent="handleRegister" id="form-signup" class="form-signin">
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
                    <div class="form-group">
                        <input
                            v-model="rePassword"
                            type="password"
                            class="form-control"
                            placeholder="Nhập lại mật khẩu"
                        />
                    </div>
                    <button
                        class="btn btn-lg btn-primary btn-block btn-signin"
                        type="submit"
                    >Đăng ký</button>
                </form>

                <router-link to="/login" class="register">Đăng nhập</router-link>
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
            email: "",
            password: "",
            rePassword: ""
        };
    },
    methods: {
        ...mapActions(["register"]),
        handleRegister() {
            if (this.email && this.password && this.rePassword) {
                if (this.password === this.rePassword) {
                    let data = {
                        email: this.email,
                        password: this.password
                    };
                    this.register(data).then(res => {
                        if (res.ok) {
                            // go to home page
                            this.$router.push('/');
                        } else {
                            alert(res.error);
                        }
                    });
                } else {
                    alert("Password was wrong !");
                }
            } else {
                alert("Please enter full of infomation");
            }
        }
    }
};
</script>

<style>
</style>