<template>
    <div class="ass1-section__item" v-if="post">
        <div class="ass1-section">
            <post-item-head :post="post" />
            <post-item-content :post="post" />
            <post-item-foot :post="post" />
            
        </div>
    </div>
</template>

<script>
import PostItemHead from "./PostItemHead";
import PostItemContent from "./PostItemContent";
import PostItemFoot from "./PostItemFoot";
export default {
    name: "post-item",
    props: {
        post: {
            type: Object
        }
    },
    components: {
        PostItemHead,
        PostItemContent,
        PostItemFoot
    }
};
</script>

<style>
</style>