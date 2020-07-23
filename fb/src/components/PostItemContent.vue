<template>
    <div class="ass1-section__content">
        <p>{{ post.post_content }}</p>
        <div class="ass1-section__image">
            <router-link :to="{ name:'post-detail',params:{id:post.PID}}">
                <img :src="getUrlImg" :alt="post.post_content" />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "post-item-content",
    props: {
        post: {
            type: Object
        }
    },
    computed: {
        getUrlImg() {
            if (this.post.url_image) {
                return this.post.url_image;
            }
            return "../../dist/images/microphone-1209816_1920.jpg";
        }
    }
};
</script>

<style>
</style>