<template>
    <div id="app">
        <app-header v-if="isRenderHeader" />

        <main>
            <div class="container">
                <router-view></router-view>
            </div>
        </main>

        <app-footer v-if="isRenderFooter" />
        <loading :class="{ show: isLoading }" />
        <notifications group="error" position="top right" />
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Loading from "./components/Loading";
import { mapState, mapActions } from "vuex";
export default {
    name: "app",
    data() {
        return {};
    },
    computed: {
        ...mapState(["isLoading"]),
        isRenderHeader() {
            var arrRouter = ["login", "register"];
            var routerName = this.$route.name;
            if (arrRouter.indexOf(routerName) !== -1) return false;
            return true;
        },
        isRenderFooter() {
            var arrRouter = ["home-page", "post-detail"];
            var routerName = this.$route.name;
            if (arrRouter.indexOf(routerName) !== -1) return false;
            return true;
        }
    },
    methods: {
        ...mapActions(["checkLogin"])
    },
    created() {
        this.checkLogin();
    },
    components: {
        AppHeader,
        AppFooter,
        Loading
    }
};
</script>

<style >
</style>
