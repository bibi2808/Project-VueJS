<template>
    <div class="ass1-add-comment">
        <form action="#" @submit.prevent="handleAddComment">
            <input
                type="text"
                v-model="comment"
                class="form-control ttg-border-none"
                placeholder="Add a comment ......"
            />
        </form>
        <div class="ass1-add-comment__content">
            <a
                href="#"
                @click.prevent="handleAddComment"
                class="ass1-add-comment__btn-save ass1-btn-icon"
            >
                <span>{{ renderMaxLength }}</span>
                <i class="icon-Submit_Tick"></i>
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { COMMENT_SUCCESS, INFORMATION_IS_NOT_CORRECT } from "../constants";
export default {
    name: "post-comment-add",
    data() {
        return {
            comment: "",
            maxLength: 180,
            postId: this.$route.params.id
        };
    },
    watch: {
        $route(to, from) {
            this.postId = to.params.id;
        }
    },
    computed: {
        renderMaxLength() {
            return this.maxLength - this.comment.length;
        }
    },
    methods: {
        ...mapActions(["addNewComment"]),
        handleAddComment() {
            if (this.comment.length && this.comment.length <= this.maxLength) {
                // Call API
                let data = {
                    comment: this.comment,
                    postid: this.postId
                };
                this.addNewComment(data).then(res => {
                    if (res.ok) {
                        this.$notify(COMMENT_SUCCESS);
                        this.comment = "";
                    } else {
                        this.$notify(INFORMATION_IS_NOT_CORRECT);
                    }
                });
            } else {
                this.$notify(INFORMATION_IS_NOT_CORRECT);
            }
        }
    }
};
</script>

<style>
</style>