<template>
    <div id="app">
        <app-header v-if="isRenderHeader" />
        <main>
            <div class="container">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </main>
        <app-footer v-if="isRenderFooter" />
        <loading :class="{ show: isLoading }" />
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Loading from "./components/Loading";
import { mapState } from "vuex";
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
    components: {
        AppHeader,
        AppFooter,
        Loading
    },
    created() {
        this.$store.dispatch("getListPostByPaging", {});
    }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>


