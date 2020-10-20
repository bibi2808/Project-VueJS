<template>
    <div class="main-content">
        <div class="backlogs-item">
            <h2>LIST VIDEOS</h2>
            <div class="wrapper-board">
                <div class="row">
                    <div class="item">
                        <item-video v-for="item in getUserListVideo" :key="item.id" :item="item" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ItemVideo from "../components/ItemVideo";
export default {
    name: "User-List-Video",
    data() {
        return {
            height: 500,
            options: {},
            playerReady: false
        };
    },
    computed: {
        ...mapGetters(["getUserListVideo"])
    },
    components: {
        ItemVideo
    }
};
</script>

<style>
.backlogs-item .page {
    font-size: 2rem;
}

.backlogs-item .project {
    border: 1px solid #009688;
}

h2 {
    text-align: center;
}

.item:hover {
    text-transform: capitalize;
    color: blueviolet;
}
</style>