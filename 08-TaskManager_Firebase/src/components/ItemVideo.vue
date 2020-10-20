<template>
    <div class="backlogs-item" v-if="item">
        <div class="project">
            <router-link :to="getVideoLink" class="video">{{ item.name}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "item-video",
    data() {
        return {};
    },
    computed: {
        getVideoLink() {
            return {
                name: "detail-video",
                params: {
                    id: this.item.id
                }
            };
        }
    },
    props: {
        item: {
            type: Object,
            default: null
        }
    }
};
</script>

<style>
.backlogs-item {
    font-size: 2rem;
}
</style>