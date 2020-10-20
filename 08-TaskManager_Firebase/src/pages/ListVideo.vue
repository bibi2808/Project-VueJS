<template>
    <div class="main-content">
        <page-title title="Management Video"></page-title>
        <div class="wrapper-board">
            <div class="row">
                <div class="item">
                    <video-comp v-for="item in listVideo" :key="item.id" :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import PageTitle from "../components/PageTitle";
import VideoComp from "../components/VideoComp";
export default {
    name: "list-video",
    computed: {
        ...mapState(["listVideo"])
    },
    components: {
        PageTitle,
        VideoComp
    }
};
</script>

<style>
</style>