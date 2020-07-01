<template>
    <b-col cols="12">
        <div class="input-group">
            <input
                v-bind:value="strSearch"
                v-on:input="handleSearch"
                type="text"
                class="form-control"
                placeholder="Search for..."
            />
            <span class="input-group-append">
                <button v-on:click="handleClear" class="btn btn-info" type="button">Clear!</button>
            </span>
        </div>
    </b-col>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "control-search",
    data() {
        return {};
    },
    computed: mapState(["strSearch"]),
    methods: {
        handleSearch(event) {
            this.$store.dispatch("handleSearch", event.target.value);
        },
        handleClear() {
            this.$store.dispatch("handleSearch", "");
        }
    }
};
</script>

<style>
</style>