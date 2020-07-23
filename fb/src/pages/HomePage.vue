<template>
    <div class="row">
        <div class="col-lg-8">
            <post-list />
        </div>
        <div class="col-lg-4">
            <side-bar />
        </div>
    </div>
</template>

<script>
import PostList from "../components/PostList";
import SideBar from "../components/SideBar";
import { mapActions } from "vuex";
export default {
    name: "home-page",
    watch: {
        $route(to, from) {
            let tagIndex = to.query.tagIndex;
            this.getListPostHasPaging({ tagIndex });
        }
    },
    methods: {
        ...mapActions(["getListPostHasPaging"])
    },
    created() {
        var tagIndex = this.$route.query.tagIndex;
        this.getListPostHasPaging({ tagIndex });
    },
    components: {
        PostList,
        SideBar
    }
};
</script>

<style>
</style>