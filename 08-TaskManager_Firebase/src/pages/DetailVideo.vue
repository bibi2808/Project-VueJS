<template>
    <div>
        <div class="project">
            <h2>
                <router-link :to="getUserListVideo" class="video">List Video</router-link>
            </h2>
        </div>
        <vimeo-player ref="player" :video-id="getVideoId" :player-height="height"></vimeo-player>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "detail-video",
    data() {
        return {
            height: 500,
            playerReady: false
        };
    },
    computed: {
        ...mapState(["currentUser"]),
        getVideoId() {
            return this.$route.params.id;
        },
        getUserListVideo() {
            return {
                name: "list-video",
                params: {
                    uid: this.currentUser.uid
                }
            };
        }
    }
};
</script>

<style>
</style>