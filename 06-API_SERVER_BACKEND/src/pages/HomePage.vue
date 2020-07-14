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
import { mapActions } from "vuex";
import PostList from "../components/PostList";
import SideBar from "../components/SideBar";
export default {
    name: "home-page",
    components: {
        PostList,
        SideBar
    },
    watch: {
        $route(to, from) {
            var tagIndex = to.query.tagIndex;
            if (tagIndex) {
                // dispatch action by category
                this.getListPostByPaging({ tagIndex });
                console.log("run");
            } else {
                // dispatch action by paging
                this.getListPostByPaging({});
            }
            console.log(to);
        }
    },
    methods: {
        ...mapActions(["getListPostByPaging"])
    }
};
</script>

<style>
</style>