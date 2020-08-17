<template>
    <div>
        <input type="file" v-on:change="uploadFile" id="files" name="files[]" multiple />
        <vimeo-player
            ref="player"
            :video-id="videoID"
            @ready="onReady"
            :player-width="width"
            :player-height="height"
        ></vimeo-player>
    </div>
</template>

<script>
import PageTitle from "../components/PageTitle";
export default {
    name: "video",
    data() {
        return {
            videoID: "12297655",
            height: 500,
            width: 800,
            options: {},
            playerReady: false,
            avatar: {
                objFile: null,
                base64Url: ""
            }
        };
    },
    computed: {
        getAvatar() {
            if (!this.avatar.base64Url) {
                return "";
            }
        }
    },
    methods: {
        onReady() {
            this.playerReady = true;
        },
        play() {
            this.$refs.player.play();
        },
        pause() {
            this.$refs.player.pause();
        },
        uploadFile(e) {
            if (e.target.files && e.target.files.length) {
                let fileAva = e.target.files[0];
                console.log(file);
                let reader = new FileReader();

                reader.addEventListener(
                    "load",
                    () => {
                        let preview = reader.result;
                        this.avatar.base64Url = preview;
                        this.avatar.objFile = fileAva;
                        console.log("preview", preview);
                    },
                    false
                );
                if (fileAva) {
                    reader.readAsDataURL(fileAva);
                }
            }
        }
    },
    components: {
        PageTitle
    }
};
</script>

<style>
</style>