<template>
    <div id="app">
        <router-view></router-view>
        <loading :class="{ show: isLoading }" />
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Loading from "./components/Loading";
export default {
    name: "app",
    data() {
        return {};
    },
    computed: mapState(["isLoading"]),
    methods: {
        ...mapActions(["onListener", "onListenerUser"])
    },
    components: {
        Loading
    },
    created() {
        this.onListener();
        this.onListenerUser();
    }
};
</script>

<style lang="scss"></style>