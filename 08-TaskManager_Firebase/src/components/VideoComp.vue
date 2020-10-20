<template>
    <div class="backlogs-item" v-if="item">
        <div class="project">
            {{ item.name }}
            <div class="button" @click.prevent="handleRegister(item)">Add-on</div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "video-comp",
    data() {
        return {};
    },
    props: {
        item: { type: Object, default: null }
    },

    methods: {
        ...mapActions(["registerVideo"]),
        handleRegister(item) {
            if (confirm("are you sure to add this video")) {
                this.registerVideo(item);
            }
        }
    }
};
</script>

<style>
.project .button:hover {
    color: #000;
}

.project .button {
    cursor: pointer;
    margin-top: 10px;
    color: rgb(255, 81, 0);
    font-size: 24px;
    border: 1px solid black;
}
</style>