<template>
    <div class="ass1-comments">
        <div class="ass1-comments__head">
            <div class="ass1-comments__title">214 Bình luận</div>
            <div class="ass1-comments__options">
                <span>Sắp xếp theo:</span>
                <a href="#" class="ass1-comments__btn-upvote ass1-btn-icon">
                    <i class="icon-Upvote"></i>
                </a>
                <a href="#" class="ass1-comments__btn-down ass1-btn-icon">
                    <i class="icon-Downvote"></i>
                </a>
                <a href="#" class="ass1-comments__btn-expand ass1-btn-icon">
                    <i class="icon-Expand_all"></i>
                </a>
            </div>
        </div>
        <!--comment-->
        <div class="ass1-comments__section">
            <a href="#" class="ass1-comments__avatar ass1-avatar">
                <img src="../../dist/images/avatar-02.png" alt />
            </a>
            <div class="ass1-comments__content">
                <a href="#" class="ass1-comments__name">Tây Tạng</a>
                <span class="ass1-comments__passed">12 giờ trước</span>
                <p>Scratch off globe, for when you want to wipe out any country that displeases you but lack the weaponry to do so.</p>
                <div class="ass1-comments__info">
                    <a href="#" class="ass1-comments__btn-upvote ass1-btn-icon">
                        <i class="icon-Upvote"></i>
                        <span>901</span>
                    </a>
                    <a href="#" class="ass1-comments__btn-down ass1-btn-icon">
                        <i class="icon-Downvote"></i>
                        <span>36</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "post-comment"
};
</script>

<style>
</style>