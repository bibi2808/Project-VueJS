<template>
    <header>
        <div class="ass1-header">
            <div class="container">
                <a href="index.html" class="ass1-logo">BIBI ZINGME</a>
                <app-navigation />

                <app-search />

                <a href="#" class="ass1-header__btn-upload ass1-btn">
                    <i class="icon-Upvote"></i> Upload
                </a>
                <a href="dang-nhap.html" class="ass1-header__btn-upload ass1-btn">Login</a>
            </div>
        </div>
    </header>
</template>

<script>
import AppNavigation from "./AppNavigation";
import AppSearch from "./AppSearch";
export default {
    name: "app-header",
    components: {
        AppNavigation,
        AppSearch
    }
};
</script>

<style>
</style>