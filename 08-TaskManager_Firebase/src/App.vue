<template>
    <div id="app">
        <router-view></router-view>
        <loading :class="{ show: isLoading }" />
    </div>
</template>

<script>
import { mapState } from "vuex";
import Loading from "./components/Loading";
export default {
    name: "app",
    data() {
        return {};
    },
    computed: mapState(["isLoading"]),
    components: {
        Loading
    }
};
</script>

<style lang="scss"></style>