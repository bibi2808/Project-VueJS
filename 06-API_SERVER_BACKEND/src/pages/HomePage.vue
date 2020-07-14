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
export default {
    name: "home-page",
    components: {
        PostList,
        SideBar
    }
};
</script>

<style>
</style>