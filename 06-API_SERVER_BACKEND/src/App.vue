<template>
    <div id="app">
        <app-header />
        <main>
            <div class="container">
                <router-view></router-view>
            </div>
        </main>
        <app-footer />
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
export default {
    name: "app",
    data() {
        return {};
    },
    components: {
        AppHeader,
        AppFooter
    }
};
</script>

<style>
</style>
