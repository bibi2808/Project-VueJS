<template>
    <div>
        <!-- Header -->
        <home-header />

        <main-header />
        <!-- End Header -->

        <!-- Content -->
        <main class="container">
            <div class="row">
                <div class="col-md-9">
                    <router-view></router-view>
                </div>
                <div class="col-md-3">
                    <side-bar />
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import HomeHeader from "../components/HomeHeader";
import MainHeader from "../components/MainHeader";
import SideBar from "../components/SideBar";
export default {
    name: "kanban-board",

    components: {
        HomeHeader,
        MainHeader,
        SideBar
    },
    methods: {
        ...mapActions(["getUserCustomField"])
    },
    mounted() {
        this.getUserCustomField();
    }
};
</script>

<style>
</style>