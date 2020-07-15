<template>
    <div class="ass1-section__list">
        <post-item v-for="post  in getListPost" :key="post.PID" :post="post" />
        <button
            @click="handleSeeMore()"
            v-if="getListPost && getListPost.length"
            class="load-more ass1-btn"
        >
            <span>SEE MORE</span>
        </button>
        <div class="ass1-section__list" v-else>
            <h3>Empty</h3>
        </div>
    </div>
</template>

<script>
import { PAGE_SIZE, CURRENT_PAGE } from "../constants";
import { mapGetters, mapActions } from "vuex";
import PostItem from "./PostItem";
export default {
    name: "post-list",
    data() {
        return {
            pagesize: PAGE_SIZE,
            currPage: CURRENT_PAGE,
            tagIndex: parseInt(this.$route.query.tagIndex)
        };
    },
    watch: {
        $route(to, from) {
            this.tagIndex = to.query.tagIndex;
            this.currPage = 1;
        }
    },
    computed: {
        ...mapGetters(["getListPost"])
    },
    methods: {
        ...mapActions(["getListPostByPaging"]),
        handleSeeMore() {
            this.currPage += 1;
            let data = {
                pagesize: this.pagesize,
                currPage: this.currPage,
                tagIndex: this.tagIndex
            };
            this.getListPostByPaging(data);
        }
    },
    components: {
        PostItem
    }
};
</script>

<style>
</style>