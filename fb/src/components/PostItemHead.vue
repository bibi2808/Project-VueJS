<template>
    <div class="ass1-section__head">
        <router-link :to="getUserLink" class="ass1-section__avatar ass1-avatar">
            <img :src="getAvatar" :alt="post.fullname" />
        </router-link>
        <div>
            <router-link :to="getUserLink" class="ass1-section__name">{{ post.fullname }}</router-link>
            <span class="ass1-section__passed">{{ formatTime }}</span>
        </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
    name: "post-item-head",
    props: {
        post: {
            type: Object
        }
    },
    computed: {
        getAvatar() {
            if (this.post.profilepicture) return this.post.profilepicture;
            return "../../dist/images/avatar-02.png";
        },
        getUserLink() {
            return { name: "user-page", params: { id: this.post.USERID } };
        },
        formatTime() {
            return moment(this.post.time_added).fromNow();
        }
    }
};
</script>

<style>
</style>