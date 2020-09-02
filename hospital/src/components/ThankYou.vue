<template>
    <div>
        <h2>Thank You</h2>

        <button type="submit" class="btn btn-primary" @click.prevent="handleThanks">Submit</button>
    </div>
</template>

<script>
export default {
    name: "thank-you",
    data() {
        return {};
    },
    methods: {
        handleThanks() {
            console.log("THANK YOU");
            localStorage.clear();
            this.$router.push("/subject");
        }
    }
};
</script>

<style>
</style>