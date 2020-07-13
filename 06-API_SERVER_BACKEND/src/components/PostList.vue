<template>
    <div class="ass1-section__list">
        <post-item />
        <post-item />
        <post-item />
        <post-item />
        <button class="load-more ass1-btn">
            <span>Xem thêm</span>
        </button>
    </div>
</template>

<script>
import PostItem from "./PostItem";
export default {
    name: "post-list",
    components: {
        PostItem
    }
};
</script>

<style>
</style>