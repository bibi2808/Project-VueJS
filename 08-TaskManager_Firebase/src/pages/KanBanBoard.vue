<template>
    <div>
        <home-header />
        <main-header />
        <main class="container">
            <div class="row">
                <div class="col-md-12">
                    <router-view></router-view>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import HomeHeader from "../components/HomeHeader";
import MainHeader from "../components/MainHeader";
export default {
    name: "kanban-board",

    components: {
        HomeHeader,
        MainHeader
    }
};
</script>

<style>
</style>