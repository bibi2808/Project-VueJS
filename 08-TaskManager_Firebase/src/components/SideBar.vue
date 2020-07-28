<template>
    <div class="side-bar">
        <div class="page-title">
            <span>Members</span>
        </div>
        <ul class="list-members" v-if="getListEmailUser">
            <li v-for="(user,index) in getListEmailUser" :key="index">{{ user }}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "side-bar",
    computed: {
        ...mapGetters(["getListEmailUser"])
    }
};
</script>

<style>
</style>