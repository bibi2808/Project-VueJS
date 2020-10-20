<template>
    <header>
        <div class="container">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
            </ul>
            <ul class="right">
                <li v-if="currentUser">
                    <span>Login with</span>
                    <router-link :to="getUserListVideo">{{ currentUser.email}}</router-link>
                </li>
                <li>
                    <a @click.prevent="handleLogout" href="#">Logout</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { auth } from "../config/firebase";
export default {
    name: "home-header",
    computed: {
        ...mapState(["currentUser"]),
        getUserListVideo() {
            return {
                name: "list-video",
                params: {
                    uid: this.currentUser.uid
                }
            };
        }
    },
    methods: {
        handleLogout() {
            if (confirm("are you sure to logout")) {
                let result = auth.signOut().then(res => {
                    localStorage.removeItem("listVideoId");
                    this.$router.push("/login");
                });
            }
        }
    }
};
</script>

<style>
.right span {
    margin-right: 20px;
}
</style>