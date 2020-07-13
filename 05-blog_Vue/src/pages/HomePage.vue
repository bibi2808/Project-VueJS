<template>
    <div>
        <page-header title="Let me go Home" />

        <blog-list />
    </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
import BlogList from "../components/BlogList";
export default {
    name: "home-page",
    components: {
        PageHeader,
        BlogList
    }
};
</script>

<style>
</style>