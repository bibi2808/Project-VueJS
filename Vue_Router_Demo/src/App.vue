<template>
    <div id="app">
        <comp-menu />
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import CompMenu from "./components/Menu";
export default {
    name: "app",
    data() {
        return {};
    },
    components: {
        CompMenu
    }
};
</script>

<style>
.slide-fade-enter-active {
    transition: all 0.3s ease;
}
.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* Trước 2.1.8 thì dùng .slide-fade-leave-active */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>
