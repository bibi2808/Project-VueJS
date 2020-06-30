<template>
    <b-col cols="12">
        <div class="form-group">
            <b-dropdown text="Sort By">
                <b-dropdown-item v-on:click="handleSort('name','asc')">Name ASC</b-dropdown-item>
                <b-dropdown-item v-on:click="handleSort('name','desc')">Name DECS</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item v-on:click="handleSort('level','asc')">Level ASC</b-dropdown-item>
                <b-dropdown-item v-on:click="handleSort('level','desc')">Level ASC</b-dropdown-item>
            </b-dropdown>
            <span class="order badge badge-success badge-medium">{{orderBy}} - {{orderDir}}</span>
        </div>
    </b-col>
</template>

<script>
export default {
    name: "control-sort",
    data() {
        return {};
    },
    props: {
        orderBy: { type: String, default: "name" },
        orderDir: { type: String, default: "asc" }
    },
    methods: {
        handleSort(orderBy, orderDir) {
            let data = { orderBy, orderDir };
            this.$emit("handleSort", data);
        }
    }
};
</script>

<style>
.order {
    text-transform: uppercase;
}
</style>