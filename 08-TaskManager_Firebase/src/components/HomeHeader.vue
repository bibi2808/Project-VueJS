<template>
    <header>
        <div class="container">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <a href="/">Tasks</a>
                </li>
            </ul>
            <ul class="right">
                <li v-if="currentUser">
                    <span>Login with</span>
                    <router-link to="/">{{ currentUser.email}}</router-link>
                </li>
                <li>
                    <a @click.prevent="handleLogout" href="#">Logout</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import { mapState } from "vuex";
import { auth } from "../config/firebase";
export default {
    name: "home-header",
    computed: {
        ...mapState(["currentUser"])
    },
    methods: {
        handleLogout() {
            if (confirm("are you sure to logout")) {
                let result = auth.signOut().then(res => {
                    console.log("result logout", res);
                });
            }

            // thay doi currentUser
        }
    }
};
</script>

<style>
.right span {
    margin-right: 20px;
}
</style>