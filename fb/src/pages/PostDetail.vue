<template>
    <div class="row">
        <div class="col-lg-8">
            <div class="ass1-section__post-detail" v-if="getPostDetail && getPostDetail.post">
                <div class="ass1-section">
                    <post-item :post="getPostDetail.post" />

                    <ul>
                        <li v-for="item in getPostDetail.categories" :key="item.TAG_ID">
                            <router-link
                                :to="getLinkCategory(item)"
                                class="category"
                            >{{ item.tag_value }}</router-link>
                        </li>
                    </ul>
                    <post-feeling />
                </div>

                <post-comment-add />

                <post-comment />
            </div>
        </div>
        <div class="col-lg-4">
            <side-bar />
        </div>
    </div>
</template>

<script>
import SideBar from "../components/SideBar";
import PostFeeling from "../components/PostFelling";
import PostItem from "../components/PostItem";
import PostComment from "../components/PostComment";
import PostCommentAdd from "../components/PostCommentAdd.vue";
import { mapGetters, mapActions } from "vuex";
import { removeVietnameseFromString } from "../helpers";
import { EMAIL_OR_PASSWORD_IS_WRONG } from "../constants";
export default {
    name: "post-detail",
    data() {
        return {
            postId: this.$route.params.id
        };
    },
    watch: {
        $route(from, to) {
            // when change route
            this.postId = to.params.id;
            this.fetDataPostDetail();
        }
    },
    computed: {
        ...mapGetters(["getPostDetail"])
    },
    methods: {
        ...mapActions(["getPostDetailById"]),
        fetDataPostDetail() {
            this.getPostDetailById(this.postId).then(res => {
                if (!res.ok) {
                    this.$router.push("/");
                }
            });
        },
        getLinkCategory(item) {
            return {
                name: "home-page",
                query: {
                    text: removeVietnameseFromString(item.tag_value),
                    tagIndex: item.tag_index
                }
            };
        }
    },
    created() {
        // when reload page
        console.log("when reload page");
        this.fetDataPostDetail();
        this.$notify(EMAIL_OR_PASSWORD_IS_WRONG);
    },
    components: {
        PostItem,
        SideBar,
        PostFeeling,
        PostComment,
        PostCommentAdd
    }
};
</script>

<style>
.category {
    font-weight: bold;
}
</style>