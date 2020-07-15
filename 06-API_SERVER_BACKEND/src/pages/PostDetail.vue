<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="ass1-section__list" v-if="postDetail && postDetail.post">
                        <div class="ass1-section">
                            <post-item v-bind:post="postDetail.post" />

                            <!-- <post-feeling /> -->
                            <ul>
                                <li v-for="item in postDetail.categories" :key="item.TAG_ID">
                                    <router-link :to="getLinkCategory(item)">{{ item.tag_value }}</router-link>
                                </li>
                            </ul>
                        </div>

                        <post-add-comment />

                        <post-comment />
                    </div>
                </div>
                <side-bar />
            </div>
        </div>
    </main>
</template>

<script>
import SideBar from "../components/SideBar";
import PostItem from "../components/PostItem";
import PostFeeling from "../components/PostFeeling";
import PostAddComment from "../components/PostAddComment";
import PostComment from "../components/PostComment";
import { mapGetters, mapActions } from "vuex";
import { removeVietnameseFromString } from "../helper";
export default {
    name: "post-detail",
    data() {
        return {
            postId: this.$route.params.id
        };
    },
    watch: {
        $route(to, from) {
            this.postId = to.params.id;
            this.fetchDataPostDetail();
        }
    },
    created() {
        //load lai page at first time
        this.fetchDataPostDetail();
    },
    computed: {
        ...mapGetters({
            postDetail: "getDataPostDetail"
        })
    },
    methods: {
        ...mapActions(["getPostDetailById"]),
        fetchDataPostDetail() {
            this.getPostDetailById(this.postId).then(res => {
                if (!res.ok) {
                    // khi mà user nhập sai địa chỉ thì chuyển về trang chủ => push home-page
                    this.$router.push("/");
                }
            });
        },
        getLinkCategory(category) {
            return {
                name: "home-page",
                query: {
                    text: removeVietnameseFromString(category.tag_value),
                    tagIndex: category.tag_index
                }
            };
        },
        login() {
            const { username, password } = this;
            this.$store
                .dispatch(AUTH_REQUEST, { username, password })
                .then(res => {
                    console.log(res);
                    this.$router.push("/");
                });
        }
    },
    components: {
        SideBar,
        PostItem,
        PostFeeling,
        PostAddComment,
        PostComment
    }
};
</script>

<style>
</style>