<template>
    <aside class="ass1-aside">
        <div class="ass1-content-head__t">
            <div>Bài viết gần đây của bạn.</div>
        </div>
        <div v-if="!isLogin">
            Vui lòng đăng nhập để xem nội dung này
            <a href="#">Đăng nhập</a>
        </div>
        <div v-else-if="isLogin && getListPostOfCurrentUser && getListPostOfCurrentUser.length">
            <post-item v-for="item in getListPostOfCurrentUser" :key="item.PID" :post="item" />
        </div>
    </aside>
</template>

<script>
import { mapGetters } from "vuex";
import PostItem from "./PostItem";
export default {
    name: "side-bar",
    computed: {
        ...mapGetters(["isLogin", "getListPostOfCurrentUser"])
    },
    components: {
        PostItem
    }
};
</script>

<style>
</style>