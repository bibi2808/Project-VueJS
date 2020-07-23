<template>
    <div class="ass1-section__footer">
        <a href="#" class="ass1-section__btn-comment ass1-btn-icon">
            <i class="icon-Comment_Full"></i>
            <span>{{ countCMT }}</span>
        </a>
    </div>
</template>

<script>
export default {
    name: "post-item-foot",
    props: {
        post: {
            type: Object
        }
    },
    computed: {
        countCMT() {
            if (this.post.count) {
                return this.post.count;
            }
            return 0;
        }
    }
};
</script>

<style>
</style>