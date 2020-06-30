<template>
    <b-col cols="12" lg="6">
        <div class="row">
            <!-- SORT : START -->
            <control-sort
                v-bind:orderBy="orderBy"
                v-bind:orderDir="orderDir"
                v-on:handleSort="handleSort"
            />
            <!-- SORT : END -->

            <!-- SEARCH : START -->
            <control-search v-bind:strSearch="strSearch" v-on:handleSearch="handleSearch" />
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
    props: {
        strSearch: { type: String, default: "" },
        orderBy: { type: String, default: "name" },
        orderDir: { type: String, default: "asc" }
    },
    data() {
        return {};
    },
    methods: {
        handleSearch(data) {
            this.$emit("handleSearch", data);
        },
        handleSort(data) {
            this.$emit("handleSort", data);
        }
    }
};
</script>

<style>
</style>