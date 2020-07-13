<template>
    <div>
        <post-item-head />

        <post-item-content />

        <post-item-footer />
    </div>
</template>

<script>
import PostItemHead from "./PostItemHead";
import PostItemContent from "./PostItemContent";
import PostItemFooter from "./PostItemFooter";
export default {
    name: "post-item",
    components: {
        PostItemHead,
        PostItemContent,
        PostItemFooter
    }
};
</script>

<style>
</style>