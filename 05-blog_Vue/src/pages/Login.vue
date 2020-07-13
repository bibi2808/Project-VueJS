<template>
    <div>
        <page-header bg="../dist/img/contact-bg.jpg" title="Login" />
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                    <form v-if="!isLogin" name="sentMessage" id="contactForm" novalidate>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls">
                                <label>Email Address</label>
                                <input
                                    v-model="email"
                                    type="email"
                                    class="form-control"
                                    placeholder="Email Address"
                                />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Password</label>
                                <input
                                    v-model="password"
                                    type="password"
                                    class="form-control"
                                    placeholder="Your password"
                                />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <br />
                        <div id="success"></div>
                        <div class="form-group">
                            <button
                                @click.prevent="handlelogin"
                                type="submit"
                                class="btn btn-primary"
                                id="sendMessageButton"
                            >Send</button>
                        </div>
                    </form>
                    <div v-else>
                        <p>Admin</p>
                        <div class="form-group">
                            <button
                                @click.prevent="handleLogout"
                                type="submit"
                                class="btn btn-primary"
                                id="sendMessageButton"
                            >Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import PageHeader from "../components/PageHeader";
export default {
    name: "login",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    computed: {
        ...mapState(["isLogin"])
    },
    methods: {
        ...mapActions(["checkLogin", "checkLogOut"]),
        handlelogin() {
            let data = {
                email: this.email,
                password: this.password
            };
            this.checkLogin(data).then(res => {
                if (res) {
                    alert("Login successfull !");
                    this.$router.push({ path: "/" });
                } else {
                    alert("Failed!");
                }
            });
        },
        handleLogout() {
            this.checkLogOut();
        }
    },
    components: {
        PageHeader
    }
};
</script>

<style>
</style>