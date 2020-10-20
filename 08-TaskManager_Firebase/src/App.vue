<template>
    <div id="app">
        <router-view></router-view>
        <loading :class="{ show: isLoading }" />
    </div>
</template>

<script>
import Loading from "./components/Loading";
import { mapState } from 'vuex';
export default {
    name: "app",
    data() {
        return {};
    },
    computed: mapState(["isLoading"]),
    methods: {},
    components: {
        Loading
    }
};
</script>

<style lang="scss"></style>