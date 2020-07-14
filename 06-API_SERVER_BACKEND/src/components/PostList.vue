<template>
    <div class="ass1-section__list">
        <post-item v-for="post  in getListPost" :key="post.PID" :post="post" />
        <button v-if="getListPost && getListPost.length" class="load-more ass1-btn">
            <span>Xem thêm</span>
        </button>
        <div class="ass1-section__list" v-else>
                <h3>Empty</h3>
            </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostItem from "./PostItem";
export default {
    name: "post-list",
    computed: {
        ...mapGetters(["getListPost"])
    },
    components: {
        PostItem
    }
};
</script>

<style>
</style>