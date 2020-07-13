<template>
    <main>
        <div class="container">
            <!--sections-->
            <div class="row">
                <div class="col-lg-8">
                    <post-list />
                </div>
                <side-bar />
            </div>
        </div>
    </main>
</template>

<script>
import PostList from "./PostList";
import SideBar from "./SideBar";
export default {
    name: "app-footer",
    components: {
        PostList,
        SideBar
    }
};
</script>

<style>
</style>