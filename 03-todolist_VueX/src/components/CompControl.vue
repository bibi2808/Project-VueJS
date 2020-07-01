<template>
    <b-col cols="12" lg="6">
        <div class="row">
            <!-- SORT : START -->
            <control-sort v-on:handleSort="handleSort" />
            <!-- SORT : END -->

            <!-- SEARCH : START -->
            <control-search />
            <!-- SEARCH : END -->
        </div>
    </b-col>
</template>

<script>
import ControlSearch from "./ControlSearch";
import ControlSort from "./ControlSort";
export default {
    name: "comp-control",
    components: {
        ControlSearch,
        ControlSort
    },
    data() {
        return {};
    },
    methods: {
        handleSort(data) {}
    }
};
</script>

<style>
</style>