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
    // load khi change route
    // lan dau tien thi not run
    watch: {
        $route(to, from) {
            var tagIndex = to.query.tagIndex;
            this.getListPostByPaging({ tagIndex });
            // nếu nhả qua homepage => tagIndex  = undified
            // nếu nhảy qua homepage có thêm query => tagIndex có value
        }
    },
    created() {
        var tagIndex = this.$route.query.tagIndex;
        this.getListPostByPaging({ tagIndex });
    },
    methods: {
        ...mapActions(["getListPostByPaging"])
    }
};
</script>

<style>
</style>